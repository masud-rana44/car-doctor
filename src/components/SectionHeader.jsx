export const SectionHeader = ({ title, subtitle, description }) => {
  return (
    <div className="max-w-xl mx-auto text-center mb-8 lg:mb-12">
      <h3 className="text-[#ff4500] font-medium">{subtitle}</h3>
      <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl mt-2">
        {title}
      </h2>
      <p className="mt-4 text-base font-normal leading-6 text-gray-600">
        {description}
      </p>
    </div>
  );
};
