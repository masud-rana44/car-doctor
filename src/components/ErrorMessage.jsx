export const ErrorMessage = ({ message }) => {
  return (
    <div className="text-lg min-h-screen text-center flex items-center justify-center text-red-500 font-medium">
      {"An error has occurred: " + message}
    </div>
  );
};
