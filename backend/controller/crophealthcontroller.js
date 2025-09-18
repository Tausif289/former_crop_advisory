import * as tf from "@tensorflow/tfjs";
import fs from "fs";
import fetch from "node-fetch";
import { createCanvas, loadImage } from "canvas";
// Classes based on training dataset
globalThis.fetch = fetch;
const CLASSES = ["healthy", "fungal_infection", "nutrient_deficiency"];
let model;

// Load model once at startup
export const loadModel = async () => {
  try {
    model = await tf.loadLayersModel("file://models/crop_model/model.json");
    console.log("✅ Crop health model loaded");
  } catch (err) {
    console.error("❌ Error loading crop model:", err);
  }
};

// Preprocess uploaded image
const preprocessImage = async (filePath) => {
  const img = await loadImage(filePath);
  const canvas = createCanvas(224, 224); // resize here
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0, 224, 224);

  // Get pixel array
  const imageData = ctx.getImageData(0, 0, 224, 224);
  const { data, width, height } = imageData;

  // Convert Uint8ClampedArray to Float32Array
  const arr = new Float32Array(width * height * 3);
  for (let i = 0, j = 0; i < data.length; i += 4, j += 3) {
    arr[j] = data[i] / 255;     // R
    arr[j + 1] = data[i + 1] / 255; // G
    arr[j + 2] = data[i + 2] / 255; // B
  }

  const tensor = tf.tensor4d(arr, [1, height, width, 3]);
  return tensor;
};


// Analyze crop image
export const analyzeCrop = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "File is required" });
    }

    const input = await preprocessImage(req.file.path); // ✅ await
    const predictions = model.predict(input);
    const scores = predictions.dataSync();

    const topIdx = scores.indexOf(Math.max(...scores));
    const result = {
      class: CLASSES[topIdx],
      confidence: scores[topIdx],
    };

    let suggestions = [];
    if (result.class === "healthy") {
      suggestions = ["✅ Crop looks healthy. Maintain regular irrigation and care."];
    } else if (result.class === "fungal_infection") {
      suggestions = [
        "⚠️ Possible fungal infection detected.",
        "Apply organic fungicide.",
        "Avoid overhead irrigation to reduce spread."
      ];
    } else if (result.class === "nutrient_deficiency") {
      suggestions = [
        "⚠️ Possible nutrient deficiency detected.",
        "Increase nitrogen-based fertilizer.",
        "Check soil nutrient balance."
      ];
    }

    res.json({ success: true, result, suggestions });
  } catch (err) {
    console.error("Error analyzing crop:", err);
    res.status(500).json({ success: false, message: "Server error analyzing crop" });
  }
};
