import { AiOutlineFileAdd } from "react-icons/ai";
import { toast } from "react-hot-toast";

export const ImageUpload = ({ image, setImage }) => {
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
    );

    fetch(
      `https://api.cloudinary.com/v1_1/${
        import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
      }/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        data.url && setImage(data.url);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error uploading image.");
      });
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <label htmlFor="image-upload" className="cursor-pointer w-full">
        <div className="flex space-x-2 items-center justify-center w-full h-12 border-2 border-dashed rounded-lg">
          <AiOutlineFileAdd />
          <span className=" text-sm font-medium text-gray-500">
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
        <div className="relative">
          <img
            src={image}
            alt="Uploaded"
            className="mt-4 rounded-full shadow-md h-20 w-20 object-cover"
          />
          <button
            onClick={() => setImage(null)}
            className="absolute text-red-600 top-2 right-2 z-2 text-xl font-medium"
          >
            X
          </button>
        </div>
      )}
    </div>
  );
};

// const [uploadImage] = useMutation(UPLOAD_IMAGE);

// const handleImageUpload = async (e) => {
//   e.preventDefault();
//   const file = e.target.files[0];
//   const formData = new FormData();
//   formData.append("file", file);
//   formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

//   try {
//     const res = await fetch(
//       `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
//       {
//         method: "POST",
//         body: formData,
//       }
//     );
//     const data = await res.json();
//     setImage(data.secure_url);
//     onUpload(data.secure_url);
//     await uploadImage({ variables: { url: data.secure_url } });
//     toast.success("Image uploaded successfully!");
//   } catch (err) {
//     console.error(err);
//     toast.error("Error uploading image.");
//   }
// };
