import React, { useState } from "react";


const Analysis = () => {
  const [image, setImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
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
    <div className="analysis">
      <h1>Skin Analysis</h1>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <button onClick={handleAnalysis}>Analyze Image</button>
      {resultImage && (
        <div>
          <h3>Analysis Result:</h3>
          
          <img src={resultImage} alt="Analysis Result" />
        </div>
      )}
    </div>
  );
};

export default Analysis;
