import { useQuery } from "@tanstack/react-query";
import { fetchBookings } from "./apiBookings";

export function useBookings(email) {
  const { isPending, error, data } = useQuery({
    queryKey: ["bookings", "email"],
    queryFn: () => fetchBookings(email),
  });

  return { isPending, error, data };
}
