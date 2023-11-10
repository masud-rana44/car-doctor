export async function fetchBookings(email) {
  const response = await fetch(
    `http://localhost:5000/bookings?email=${email}`,
    { credentials: "include" }
  );
  const data = await response.json();
  return data;
}

export async function updateBooking(id, updatedData) {
  const response = await fetch(`http://localhost:5000/bookings/${id}`, {
    method: "PATCH",
    "content-type": "application/json",
    body: JSON.stringify(updatedData),
  });
  const data = await response.json();
  return data;
}

export async function deleteBooking(id) {
  const res = await fetch(`http://localhost:5000/bookings/${id}`, {
    method: "DELETE",
  });
  const data = await res.json();
  return data;
}
