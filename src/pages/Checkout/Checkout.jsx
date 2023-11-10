import { Button } from "@radix-ui/themes";
import { PageHeader } from "../../components/PageHeader";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuth } from "../../contexts/AuthContext";

const Checkout = () => {
  const { state } = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { user } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const firstName = form.firstname.value;
    const lastName = form.lastname.value;
    const phone = form.phone.value;
    const email = form.email.value;

    setIsLoading(true);

    fetch(`http://localhost:5000/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        user: {
          firstName,
          lastName,
          phone,
          email,
        },
        service: state.service,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => {
        setError(err.message);
        toast.error(err.message);
      })
      .finally(setIsLoading(false));
  };

  return (
    <div className="mb-20">
      <PageHeader route="Check Out" />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-6 items-center gap-x-10 p-16 rounded-md bg-gray-100"
      >
        <div className="w-full space-x-5 flex items-center">
          <input
            className="input"
            type="text"
            name="firstname"
            disabled={isLoading}
            placeholder="First Name"
          />
          <input
            className="input"
            type="text"
            name="lastname"
            disabled={isLoading}
            placeholder="Last Name"
          />
        </div>
        <div className="w-full space-x-5 flex items-center">
          <input
            className="input"
            type="text"
            name="phone"
            disabled={isLoading}
            placeholder="Your Phone"
          />
          <input
            className="input"
            type="text"
            name="email"
            value={user?.email}
            readOnly
            disabled={isLoading}
            placeholder="Your Email"
          />
        </div>
        <div className="w-full">
          <textarea
            name="message"
            disabled={isLoading}
            className="input"
            cols="30"
            rows="7"
            placeholder="Your Message"
          />
        </div>
        <Button disabled={isLoading} size="4" className="cursor-pointer w-full">
          Confirm Order
        </Button>
      </form>
    </div>
  );
};

export default Checkout;
