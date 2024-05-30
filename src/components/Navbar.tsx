import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/feature/hook";
import { logout } from "../redux/auth/authSlice";
import Toggle from "./Toggle";

const Navbar = () => {
  const { user } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();
  return (
    <>
      <div className="bg-slate-400 dark:bg-gray-800 z-10 flex flex-col overflow-hidden px-4 py-4 text-gray-200 md:mx-auto md:flex-row md:items-center sticky top-0">
        <Link to="/">
          <h3 className="border px-2 flex cursor-pointer items-center whitespace-nowrap text-2xl font-black text-blue-50">
            <span className="text-[#22C55E]  font-bold">M</span>
            eal-
            <span className="text-[#3B82F6] font-bold">M</span>atrix
          </h3>
        </Link>

        <label
          className="absolute top-5 right-7 cursor-pointer md:hidden"
          htmlFor="navbar-open"
        >
          <span className="sr-only">Toggle Navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <div className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
          <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
            <li className="font-bold md:mr-12">
              <Link to="/supplies">All Supplies</Link>
            </li>
            <li>
              <Toggle />
            </li>
            <li className="md:mr-12 flex gap-x-2">
              {user?.username ? (
                <>
                  <button
                    onClick={() => dispatch(logout())}
                    className="rounded-full border-2 border-white px-6 py-1 text-white transition-colors hover:bg-blue-500 hover:text-white"
                  >
                    Logout
                  </button>
                  <Link to="/dashboard">
                    <button className="rounded-full border-2 border-white px-6 py-1 text-white transition-colors hover:bg-blue-500 hover:text-white">
                      Dashboard
                    </button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <button className="rounded-full border-2 border-white px-6 py-1 text-white transition-colors hover:bg-blue-500 hover:text-white">
                      Login
                    </button>
                  </Link>
                  <Link to="/register">
                    <button className="rounded-full border-2 border-white px-6 py-1 text-white transition-colors hover:bg-blue-500 hover:text-white">
                      Sign Up
                    </button>
                  </Link>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
