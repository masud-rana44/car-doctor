import { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPLOAD_IMAGE } from "../graphql/mutations";
import { CLOUDINARY_UPLOAD_PRESET, CLOUDINARY_CLOUD_NAME } from "../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ImageUpload = ({ onUpload }) => {
  const [image, setImage] = useState(null);
  const [uploadImage] = useMutation(UPLOAD_IMAGE);

  const handleImageUpload = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      setImage(data.secure_url);
      onUpload(data.secure_url);
      await uploadImage({ variables: { url: data.secure_url } });
      toast.success("Image uploaded successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Error uploading image.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <label htmlFor="image-upload" className="cursor-pointer">
        <div className="flex flex-col items-center justify-center w-32 h-32 border-2 border-dashed rounded-lg">
          <FontAwesomeIcon icon={faUpload} size="2x" />
          <span className="mt-2 text-sm font-medium text-gray-500">
            Upload Image
          </span>
        </div>
      </label>
      <input
        id="image-upload"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageUpload}
      />
      {image && (
        <img
          src={image}
          alt="Uploaded"
          className="mt-4 rounded-lg shadow-md max-h-60"
        />
      )}
    </div>
  );
};

export default ImageUpload;
