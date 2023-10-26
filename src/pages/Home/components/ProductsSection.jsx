import { Button } from "@radix-ui/themes";
import { SectionHeader } from "../../../components/SectionHeader";

export const ProductsSection = () => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20 ">
      <div className="px-4 mx-auto sm:px-6 lg:px-10 max-w-7xl">
        <SectionHeader
          subtitle="Popular Products"
          title="Browse Our Products"
          description="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
        />
        <div className="grid grid-cols-2 gap-6  lg:gap-4 lg:grid-cols-3"></div>
      </div>
      <div className="text-center mt-8">
        <Button
          style={{
            color: "orangered",
            border: "1px solid orangered",
            outline: "none",
          }}
          size="3"
          variant="outline"
          highContrast
        >
          More Products
        </Button>
      </div>
    </section>
  );
};
