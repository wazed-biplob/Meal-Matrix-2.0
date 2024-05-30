import { IDonorDetails } from "../types/types";

const DonorsCard = ({ donor }: { donor: IDonorDetails }) => {
  return (
    <>
      <div className="flex flex-col bg-[lightgray] gap-y-2 border rounded-md px-8 pt-8 pb-8 dark:bg-gray-800 dark:text-gray-50 text-gray-800">
        <img
          src=""
          alt=""
          className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 dark:bg-gray-500"
        />
        <div>
          <h2 className="text-xl font-semibold">{donor?.username}</h2>
          <span className="block py-2 text-sm dark:text-gray-600">
            {donor?.companyName}
          </span>
          <p>{donor?.donorStatement}</p>
        </div>
      </div>
    </>
  );
};

export default DonorsCard;
