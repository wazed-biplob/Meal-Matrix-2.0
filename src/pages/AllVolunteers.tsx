/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useGetVolunteersQuery } from "../redux/api/baseApi";

const AllVolunteers = () => {
  const { data, isLoading } = useGetVolunteersQuery(undefined);

  const volunteers = data?.data;
  if (isLoading) {
    return (
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    );
  }
  return (
    <>
      <div className="container bg-[#001529] p-2 mx-auto sm:p-4 text-gray-800 rounded-lg">
        <h2 className="mb-4 text-2xl font-semibold leading-tight text-white">
          Product Inventory
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs text-white">
            <thead className="bg-gray-300 text-black">
              <tr className="text-left">
                <th className="p-3">SL</th>
                <th className="p-3">Volunteer Photo</th>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Present Address</th>
              </tr>
            </thead>
            <tbody>
              {volunteers?.map((volunteer: any, idx: number) => (
                <tr
                  key={volunteer?._id}
                  className="border-b border-opacity-20 dark:border-gray-300 dark:bg-slate-600"
                >
                  <td className="p-3">
                    <p>{idx + 1}</p>
                  </td>
                  <td className="p-3">
                    <img
                      src={volunteer?.imgURL}
                      alt="image"
                      width={40}
                      height={40}
                    />
                  </td>
                  <td className="p-3">
                    <p>{volunteer?.name}</p>
                  </td>

                  <td className="p-3">
                    <p>{volunteer?.email}</p>
                  </td>
                  <td className="p-3">
                    <p>{volunteer?.presentAddress}</p>
                  </td>

                  <td className="text-right"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllVolunteers;
