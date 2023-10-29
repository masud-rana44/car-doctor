import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useBookings } from "./useBookings";
import { AppointmentCard } from "./AppointmentCard";
import { Loader } from "../../components/Loader";

const Appointment = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const { data, isPending } = useBookings(user?.email);

  if (!user.email) return navigate("/login");
  if (isPending) return <Loader />;

  return (
    <div className="p-10 space-y-6">
      {data.map((app) => (
        <AppointmentCard key={app._id} app={app} />
      ))}
    </div>
  );
};

export default Appointment;
