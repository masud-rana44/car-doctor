import { BiLoaderAlt } from "react-icons/bi";

export const Loader = () => {
  return (
    <div className="w-full text-center min-h-screen flex items-center justify-center">
      <BiLoaderAlt size={24} className="animate-spin text-orange-600" />
    </div>
  );
};
