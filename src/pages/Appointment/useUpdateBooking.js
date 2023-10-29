import { useMutation } from "@tanstack/react-query";
import { updateBooking as updateBookingAPI } from "./apiBookings";

export function useUpdateBooking(id, data) {
  const { isPending, mutate: updateBooking } = useMutation({
    mutationFn: () => updateBookingAPI(id, data),
  });

  return { isPending, updateBooking };
}
