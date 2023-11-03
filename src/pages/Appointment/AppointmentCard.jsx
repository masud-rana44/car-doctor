import { useEffect, useState } from "react";
import { useDeleteBooking } from "./useDeleteBooking";
import { useUpdateBooking } from "./useUpdateBooking";

export const AppointmentCard = ({ app }) => {
  const { idPending: isDeleting, deleteBooking } = useDeleteBooking();
  const { isPending: isUpdateing, updateBooking } = useUpdateBooking();
  const [status, setStatus] = useState("unpaid");

  useEffect(() => {
    updateBooking(app._id, status);
  }, [app._id, updateBooking, status]);

  return (
    <div className="flex items-center ">
      <button
        disabled={isDeleting || isUpdateing}
        onClick={() => deleteBooking(app._id)}
        className="h-10 w-10 flex items-center justify-center mr-6 bg-gray-200 rounded-full text-red-600 font-medium text-xl cursor-pointer"
      >
        X
      </button>
      <img
        className="h-20 object-cover w-32 rounded-xl mr-10"
        src={app.service.img}
        alt=""
      />
      <div>
        <h2 className="font-medium text-xl">{app.service.title}</h2>

        <p>{app.user.firstName}</p>
      </div>
      <div className="ml-auto">
        <select
          onChange={(e) => setStatus(e.target.value)}
          value={status}
          name="status"
          id=""
        >
          <option value="unpaid">Unpaid</option>
          <option value="paid">Paid</option>
        </select>
      </div>
      <p className="ml-auto font-medium text-lg">${app.service.price}</p>
    </div>
  );
};
