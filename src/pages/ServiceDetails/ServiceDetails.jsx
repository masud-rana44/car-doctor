import { Link, useLocation } from "react-router-dom";
import { PageHeader } from "../../components/PageHeader";
import { Button } from "@radix-ui/themes";

const ServiceDetails = () => {
  const location = useLocation();
  const { service } = location.state;

  const { title, img, price, description } = service;

  return (
    <div className="mb-20">
      <PageHeader route="Service Details" />
      <div className="flex items-center gap-x-10">
        <img src={img} alt="" />
        <div>
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <p className="text-gray-600 mb-4">{description}</p>
          <p className="text-xl font-bold mb-2">Price ${price}</p>
          <Link to="/checkout">
            <Button size="4">Proceed Checkout</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
