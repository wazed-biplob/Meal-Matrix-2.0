const Volunteer = () => {
  return (
    <>
      <div className="my-4 max-w-screen-md border px-4 shadow-xl sm:mx-4 sm:rounded-xl sm:px-4 sm:py-4 md:mx-auto">
        <div className="flex flex-col border-b py-4 sm:flex-row sm:items-start">
          <div className="shrink-0 mr-auto sm:py-3">
            <p className="font-medium">Volunteer Account Details</p>
            <p className="text-sm text-gray-600">
              Register A Virtual Volunteer Account
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">Name</p>
          <input
            placeholder="First Name"
            className="mb-2 w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 sm:mr-4 sm:mb-0 focus:ring-1"
          />
          <input
            placeholder="Last Name"
            className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
          />
        </div>
        <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">Father's Name</p>
          <input
            placeholder="First Name"
            className="mb-2 w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 sm:mr-4 sm:mb-0 focus:ring-1"
          />
          <input
            placeholder="Last Name"
            className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
          />
        </div>
        <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">Mother's Name</p>
          <input
            placeholder="First Name"
            className="mb-2 w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 sm:mr-4 sm:mb-0 focus:ring-1"
          />
          <input
            placeholder="Last Name"
            className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
          />
        </div>
        <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">Email</p>
          <input
            placeholder="email@domain.com"
            className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
          />
        </div>
        <div className="flex flex-col gap-4 py-4  lg:flex-row">
          <div className="shrink-0 w-32  sm:py-4">
            <p className="mb-auto font-medium">Avatar</p>
            <p className="text-sm text-gray-600">Change your avatar</p>
          </div>
          <div className="flex h-56 w-full flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-gray-300 p-5 text-center">
            <img
              src="https://i.ibb.co/NYsF47j/i-1.png"
              className="h-16 w-16 rounded-full"
            />
            <p className="text-sm text-gray-600">
              Drop your desired image file here to start the upload
            </p>
            <input
              type="file"
              className="max-w-full rounded-lg px-2 font-medium text-slate-600 outline-none ring-blue-600 focus:ring-1"
            />
          </div>
        </div>
        <div className="flex justify-end py-4">
          <button className="mr-2 rounded-lg border-2 px-4 py-2 font-medium text-gray-500 focus:outline-none focus:ring hover:bg-gray-200">
            Cancel
          </button>
          <button className="rounded-lg border-2 border-transparent bg-slate-600 px-4 py-2 font-medium text-white focus:outline-none focus:ring hover:bg-blue-700">
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default Volunteer;
