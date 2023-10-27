import { Button } from "@radix-ui/themes";
import { PageHeader } from "../../components/PageHeader";
import { useLocation } from "react-router-dom";

const Checkout = () => {
  const { state } = useLocation();
  const { _id, title } = state.service;

  return (
    <div className="mb-20">
      <PageHeader route="Check Out" />
      <form className="flex flex-col space-y-6 items-center gap-x-10 p-16 rounded-md bg-gray-100">
        <div className="w-full space-x-5 flex items-center">
          <input
            className="input"
            type="text"
            name="firstname"
            placeholder="First Name"
          />
          <input
            className="input"
            type="text"
            name="lastname"
            placeholder="Last Name"
          />
        </div>
        <div className="w-full space-x-5 flex items-center">
          <input
            className="input"
            type="text"
            name="phone"
            placeholder="Your Phone"
          />
          <input
            className="input"
            type="text"
            name="email"
            placeholder="Your Email"
          />
        </div>
        <div className="w-full">
          <textarea
            name="message"
            className="input"
            cols="30"
            rows="7"
            placeholder="Your Message"
          />
        </div>
        <Button size="4" className="cursor-pointer w-full">
          Confirm Order
        </Button>
      </form>
    </div>
  );
};

export default Checkout;
