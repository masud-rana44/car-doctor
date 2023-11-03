import { useMutation } from "@tanstack/react-query";
import { updateBooking as updateBookingAPI } from "./apiBookings";

export function useUpdateBooking() {
  const { isPending, mutate: updateBooking } = useMutation({
    mutationFn: (id, data) => {
      console.log(id, data);
      return updateBookingAPI(id, data);
    },
  });

  return { isPending, updateBooking };
}
