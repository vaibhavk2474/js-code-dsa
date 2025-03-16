import { ChangeEvent, useState } from "react";
import TextRecognition from "./TextRecognition";

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const image = event.target.files?.[0];
    if (image) {
      setSelectedImage(URL.createObjectURL(image));
    }
  };
  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {selectedImage && <img src={selectedImage} alt="Selected" />}
      {selectedImage && <TextRecognition selectedImage={selectedImage} />}
    </div>
  );
};
export default ImageUploader;
