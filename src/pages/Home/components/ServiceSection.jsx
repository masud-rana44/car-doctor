import { useEffect, useState } from "react";
import { SectionHeader } from "../../../components/SectionHeader";
import { ServiceCard } from "../../../components/ServiceCard";

export const ServiceSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-28 lg:mt-10">
      <div className="px-4 mx-auto sm:px-6 lg:px-10 max-w-7xl">
        <SectionHeader
          subtitle="Service"
          title="Our Service Area"
          description="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
        />
        <div className="grid grid-cols-2 gap-6  lg:gap-4 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};
