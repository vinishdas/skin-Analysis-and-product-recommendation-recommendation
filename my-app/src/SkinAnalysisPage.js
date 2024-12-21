import React, { useState } from 'react';
import { Button } from '../components/ui/button'; // Adjusted relative path for Vite
import { Card, CardContent } from '../components/ui/card';
import { Upload } from 'lucide-react';
import { Alert, AlertDescription } from '../components/ui/alert';

const SkinAnalysisPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError('File size too large. Please select an image under 5MB.');
        return;
      }
      if (!file.type.startsWith('image/')) {
        setError('Please select a valid image file.');
        return;
      }

      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
      setAnalysis(null);
      setError(null);
    }
  };

  const handleAnalyze = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const formData = new FormData();
      formData.append('image', selectedImage);

      const response = await fetch('YOUR_ML_API_ENDPOINT', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setAnalysis({
        skinType: data.skinType,
        concerns: data.concerns,
        recommendations: data.recommendations,
        confidence: data.confidence,
      });
    } catch (err) {
      console.error('Error during analysis:', err);
      setError('Failed to analyze image. Please try again.');
      setAnalysis(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Skin Analysis Tool</h1>

        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {!analysis && (
          <div className="mb-8">
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-white hover:bg-gray-50">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-12 h-12 mb-4 text-gray-400" />
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">PNG, JPG or JPEG (MAX. 5MB)</p>
                </div>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageSelect}
                />
              </label>
            </div>
          </div>
        )}

        {selectedImage && !analysis && (
          <div className="mb-8 flex justify-center">
            <Button onClick={handleAnalyze} disabled={isLoading} className="px-8 py-2">
              {isLoading ? 'Analyzing...' : 'Analyze Image'}
            </Button>
          </div>
        )}

        {analysis && (
          <div className="space-y-8">
            <div className="flex justify-end">
              <Button
                onClick={() => {
                  setSelectedImage(null);
                  setPreviewUrl(null);
                  setAnalysis(null);
                }}
                variant="outline"
              >
                Analyze New Image
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="h-fit">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Analyzed Image</h2>
                  <div className="relative rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src={previewUrl}
                      alt="Skin analysis"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="h-fit">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Analysis Results</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Skin Type</h3>
                      <p className="text-gray-700">{analysis.skinType}</p>
                      {analysis.confidence && (
                        <p className="text-sm text-gray-500 mt-1">
                          Confidence: {(analysis.confidence * 100).toFixed(1)}%
                        </p>
                      )}
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-2">Identified Concerns</h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        {analysis.concerns.map((concern, index) => (
                          <li key={index}>{concern}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-2">Recommendations</h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        {analysis.recommendations.map((rec, index) => (
                          <li key={index}>{rec}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkinAnalysisPage;
