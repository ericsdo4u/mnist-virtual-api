import { useState } from "react";
// import { Button } from "./components/button"
// import { Button } from "./components/button";
import Button from "/src/components/button.jsx";



const App = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        body: formData,
      });
      
      const data = await response.json();
      setPrediction(data.predicted_digit);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
    setLoading(false);
  };


  return (
    <div className="flex flex-col items-center p-5">
      <h1 className="text-2xl font-bold mb-4">MNIST Digit Classifier</h1>
      <input type="file" accept="image/*" onChange={handleFileChange} className="mb-4" />
      <Button onClick={handleUpload} disabled={loading}>
        {loading ? "Predicting..." : "Upload & Predict"}
      </Button>
      {prediction !== null && (
        <div className="mt-4 text-lg font-semibold">
          Predicted Digit: {prediction}
        </div>
      )}
    </div>
  );
}

export default App
