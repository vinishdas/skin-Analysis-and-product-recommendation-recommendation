import React, { useState } from "react";
import "./style/Analysis.css";
import Navbar from "./Navebar"; // Adjust the import path if necessary

const Analysis = () => {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [resultImage, setResultImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleAnalysis = async () => {
    if (!image) {
      alert("Please upload an image first!");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await fetch("http://localhost:5000/analyze", {
        method: "POST",
        body: formData,
      });
      const data = await response.blob();
      setResultImage(URL.createObjectURL(data));
    } catch (error) {
      console.error("Error during analysis:", error);
    }
  };

  return (
    <div className="analysis-container">
      <Navbar></Navbar>
   

      {/* Background Container */}
      <div className="background-container"></div>

      {/* Skin Analysis Content */}
      <div className="analysis">
        <h1>Skin Analysis</h1>
        <input type="file" accept="image/*" onChange={handleImageUpload} />

        {imagePreview && (
          <div className="image-preview">
            <h3>Uploaded Image:</h3>
            <img src={imagePreview} alt="Uploaded Preview" />
          </div>
        )}

        <button onClick={handleAnalysis}>Analyze Image</button>

        {resultImage && (
          <div className="result-image">
            <h3>Analysis Result:</h3>
            <img src={resultImage} alt="Analysis Result" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Analysis;
