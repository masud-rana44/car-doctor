import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

export const ServiceCard = ({ service }) => {
  const { _id, price, img, title } = service;

  return (
    <div className="relative group p-4 border border-gray-200 rounded-2xl">
      <div className="overflow-hidden aspect-w-1 aspect-h-1">
        <img
          className="object-cover w-full h-[280px] transition-all duration-300 rounded-lg"
          src={img}
          alt=""
        />
      </div>
      <div className="flex flex-col mt-4 space-y-3">
        <div>
          <h3 className="text-xs font-bold text-gray-700 sm:text-sm md:text-base">
            {title}
          </h3>
        </div>
        <div className="flex items-center justify-between text-orange-600">
          <p className="text-xs font-bold  sm:text-sm md:text-base">
            Price: ${price}
          </p>

          <Link to={`/services/${_id}`} state={{ service }}>
            <AiOutlineArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};
