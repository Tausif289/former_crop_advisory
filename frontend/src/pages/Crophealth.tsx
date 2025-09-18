import React, { useState } from "react";
import axios from "axios";
import { Upload, FileImage, Loader2, CheckCircle, AlertTriangle } from "lucide-react";

const CropHealth: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  // File upload preview
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
    setError(null);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  // Call backend API
  const analyzeCrop = async () => {
    if (!selectedFile) return;

    setLoading(true);
    setReport(null);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("image", selectedFile);

      const response = await axios.post(
        "http://localhost:4000/api/crop/analyze", // your backend endpoint
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.data.success) {
        setReport(response.data.data); // { health, issues, suggestions }
      } else {
        setError(response.data.message || "Failed to analyze crop");
      }
    } catch (err: any) {
      console.error(err);
      setError("Error analyzing crop. Check backend connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🌱 Crop Health Analysis</h1>

      {/* Upload Section */}
      <div className="border-2 border-dashed border-green-400 rounded-xl p-6 text-center bg-green-50">
        {preview ? (
          <div className="flex flex-col items-center space-y-3">
            <img src={preview} alt="Crop Preview" className="w-48 h-48 object-cover rounded-lg shadow-md" />
            <p className="text-sm text-gray-600">{selectedFile?.name}</p>
            <button
              onClick={analyzeCrop}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-500 transition"
            >
              {loading ? (
                <span className="flex items-center space-x-2">
                  <Loader2 className="animate-spin w-5 h-5" />
                  <span>Analyzing...</span>
                </span>
              ) : (
                <span className="flex items-center space-x-2">
                  <Upload className="w-5 h-5" />
                  <span>Analyze Crop</span>
                </span>
              )}
            </button>
          </div>
        ) : (
          <label className="flex flex-col items-center cursor-pointer">
            <FileImage className="w-12 h-12 text-green-600 mb-2" />
            <span className="text-gray-700">Click to upload a crop image</span>
            <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
          </label>
        )}
      </div>

      {/* Error */}
      {error && <p className="text-red-600 mt-4">{error}</p>}

      {/* Health Report Section */}
      {report && (
        <div className="mt-6 bg-white shadow-md rounded-xl p-6 space-y-4">
          <h2 className="text-xl font-semibold flex items-center space-x-2">
            {report.health === "Healthy" ? (
              <CheckCircle className="text-green-600 w-6 h-6" />
            ) : (
              <AlertTriangle className="text-yellow-500 w-6 h-6" />
            )}
            <span>Health Report</span>
          </h2>

          <p className="text-gray-700">
            <strong>Status:</strong> {report.health}
          </p>

          <div>
            <h3 className="font-semibold">🛑 Issues Found:</h3>
            <ul className="list-disc pl-6 text-red-600">
              {report.issues.map((issue: string, i: number) => (
                <li key={i}>{issue}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">💡 Suggestions:</h3>
            <ul className="list-disc pl-6 text-green-700">
              {report.suggestions.map((s: string, i: number) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CropHealth;
