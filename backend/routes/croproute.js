import express from "express";
import multer from "multer";
import {loadModel, analyzeCrop } from "../controller/crophealthcontroller.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });
await loadModel();

// Route: POST /api/crop/analyze
router.post("/analyze", upload.single("image"), analyzeCrop);

export default router;
