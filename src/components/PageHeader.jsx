import img from "../assets/images/banner/4.jpg";

export const PageHeader = ({ route }) => {
  return (
    <div className="relative  overflow-hidden mt-6 mb-28">
      <img
        className="h-[280px] rounded-sm w-full object-cover"
        src={img}
        alt="banner"
      />
      <div className="absolute w-full inset-y-0 bg-gradient-to-r from-black/80 to-black/10" />
      <div className="absolute left-20 top-[40%] text-white  space-y-6">
        <h1 className="text-4xl font-bold mb-4">{route}</h1>
      </div>
      <div className="[clip-path:polygon(0%_100%,10%_0%,90%_0%,100%_100%)] absolute bottom-0 left-[45%] bg-orange-600 text-white px-6 py-2">
        Home/{route}
      </div>
    </div>
  );
};
