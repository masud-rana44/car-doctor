import { SectionHeader } from "../../../components/SectionHeader";
import { ServiceCard } from "../../../components/ServiceCard";
import { Button } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "../../../components/Loader";
import { ErrorMessage } from "../../../components/ErrorMessage";

export const ServiceSection = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["services"],
    queryFn: () =>
      fetch("http://localhost:5000/services").then((res) => res.json()),
  });

  if (isPending) return <Loader />;

  if (error || !data) return <ErrorMessage message={error.message} />;

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20 lg:mt-16">
      <div className="px-4 mx-auto sm:px-6 lg:px-10 max-w-7xl">
        <SectionHeader
          subtitle="Service"
          title="Our Service Area"
          description="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
        />
        <div className="grid grid-cols-2 gap-6  lg:gap-4 lg:grid-cols-3">
          {data.slice(0, 6).map((service) => (
            <ServiceCard key={service.service_id} service={service} />
          ))}
        </div>
      </div>
      <div className="text-center mt-8">
        <Link to="/services">
          <Button
            style={{
              color: "orangered",
              border: "1px solid orangered",
              outline: "none",
              cursor: "pointer",
            }}
            size="3"
            variant="outline"
            highContrast
          >
            More Services
          </Button>
        </Link>
      </div>
    </section>
  );
};
