import iconCalender from "../../../assets/icons/001-timetable.svg";
import iconLoacation from "../../../assets/icons/location.svg";
import iconPhone from "../../../assets/icons/phone.svg";

export const Info = () => {
  const data = [
    {
      icon: iconCalender,
      title: "We are open monday-friday",
      description: "7:00 am - 9:00 pm",
    },
    {
      icon: iconPhone,
      title: "Have a question?",
      description: "+2546 251 2658",
    },
    {
      icon: iconLoacation,
      title: "Need a repair? our address",
      description: "Liza Street, New York",
    },
  ];

  return (
    <section className="py-12 bg-gray-800  rounded-lg">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-4">
        <div className="grid grid-cols-1 gap-8  text-center sm:gap-x-8 md:grid-cols-3">
          {data.map((info) => (
            <div key={info.title} className="flex items-center gap-x-4">
              <h3 className="font-bold text-7xl">
                <img src={info.icon} alt="" />
              </h3>
              <div className="text-white text-left">
                <p className="mt-4 ">{info.title}</p>
                <p className="text-lg font-semibold mt-0.5 ">
                  {info.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
