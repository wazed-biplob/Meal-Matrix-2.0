import "../index.css";
const SectionHeading = ({
  children,
  subtitle,
}: {
  children: React.ReactNode;
  subtitle: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-center mt-0 mb-16">
      <div className="text-5xl font-[600] flex justify-center items-center font-poppins dark:text-gray-300 text-center">
        {children}
      </div>
      <div>
        <p className="mt-6 text-center px-10 text-[18px] dark:text-gray-300">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default SectionHeading;
