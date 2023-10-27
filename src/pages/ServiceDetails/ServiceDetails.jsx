import { Link, useParams } from "react-router-dom";
import { PageHeader } from "../../components/PageHeader";
import { Button } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "../../components/Loader";
import { ErrorMessage } from "../../components/ErrorMessage";

const ServiceDetails = () => {
  const { id } = useParams();

  const {
    isPending,
    error,
    data: service,
  } = useQuery({
    queryKey: ["service", "serviceId"],
    queryFn: () =>
      fetch(`http://localhost:5000/services/${id}`).then((res) => res.json()),
  });

  if (isPending) return <Loader />;
  if (error || !service) return <ErrorMessage message={error.message} />;

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
          <Link to="/checkout" state={{ service }}>
            <Button size="4">Proceed Checkout</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
