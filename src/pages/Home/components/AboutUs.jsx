import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
import { Button } from "@radix-ui/themes";

export const AboutUs = () => {
  return (
    <section className="mt-24">
      <div className="container">
        <div className="flex  flex-col md:flex-row items-center justify-center gap-10 md:gap-28">
          <div className="basis-[50%] relative">
            <img
              src={person}
              alt="About Us"
              className="h-[470px] object-cover rounded-xl"
            />
            <img
              src={parts}
              alt="About Us"
              className=" w-[300px] hidden md:flex rounded-md border-[6px] border-white absolute top-[88%] -right-52  transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="basis-[50%]">
            <h2 className=" text-orange-600 font-medium mb-4">About Us</h2>
            <h1 className="text-4xl font-bold mb-10">
              We are qualified & of experience in this field
            </h1>
            <p className="mb-4 text-gray-600">
              We are a team of experienced mechanics who are passionate about
              cars and providing top-notch service to our customers. Our goal is
              to make sure your car is running smoothly and safely on the road.
            </p>
            <p className="text-gray-600 mb-6">
              Whether you need a routine oil change or a major repair, we have
              the expertise and equipment to get the job done right. We use only
              the highest quality parts and materials, and we stand behind our
              work with a satisfaction guarantee.
            </p>
            <Button size="3" color="orange" variant="classic">
              Get More Info
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
