import { Button } from "@radix-ui/themes";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="w-full min-h-screen flex flex-col  items-center justify-center">
      <p className="text-[150px] font-bold text-orange-600">404</p>
      <p>{error?.message}</p>
      <Link to="/">
        <Button>Go Back to Home</Button>
      </Link>
    </div>
  );
};

export default Error;
