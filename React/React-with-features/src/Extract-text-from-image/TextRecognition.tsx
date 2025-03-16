import React, { useEffect, useState } from "react";
import Tesseract from "tesseract.js";

const TextRecognition: React.FC<{ selectedImage: string }> = ({
  selectedImage,
}) => {
  const [recognizedText, setRecognizedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState("");

  useEffect(() => {
    const recognizeText = async () => {
      try {
        if (selectedImage) {
          setIsLoading(true);
          const result = await Tesseract.recognize(selectedImage, "eng", {
            logger: (m) => console.log("m", m), // Optional: log progress
          });
          setRecognizedText(result.data.text);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    recognizeText();
  }, [selectedImage]);

  console.log("recognizedText", recognizedText);

  return (
    <div>
      <h2>Recognized Text:</h2>
      {isLoading ? <span>Loading...</span> : <pre>{recognizedText}</pre>}
    </div>
  );
};
export default TextRecognition;
