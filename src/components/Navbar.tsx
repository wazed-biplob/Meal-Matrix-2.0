import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/feature/hook";
import { logout } from "../redux/auth/authSlice";
import Toggle from "./Toggle";

const Navbar = () => {
  const { user } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();
  return (
    <>
      <div className="bg-slate-400 dark:bg-gray-800 z-10 backdrop-blur-sm bg-opacity-90 flex justify-between flex-row items-center gap-x-2 overflow-hidden py-4 text-gray-200 sticky top-0">
        <div className="px-4">
          <Link to="/">
            <h3 className="border px-2 flex cursor-pointer items-center whitespace-nowrap text-2xl font-black text-blue-50">
              <span className="text-[#22C55E]  font-bold">M</span>
              eal-
              <span className="text-[#3B82F6] font-bold">M</span>atrix
            </h3>
          </Link>
        </div>
        <div>
          <ul className="flex flex-row justify-center items-center">
            <li className="font-bold md:mr-12">
              <Link to="/leaderboard">Leaderboard</Link>
            </li>
            <li className="font-bold md:mr-12">
              <Link to="/community">Community</Link>
            </li>
            <li className="font-bold md:mr-12">
              <Link to="/supplies">All Supplies</Link>
            </li>
            <li className="font-bold md:mr-12">
              <Link to="/volunteer">Volunteer</Link>
            </li>
            <li className="font-bold md:mr-12">
              <Link to="/about-us">About Us</Link>
            </li>
          </ul>
        </div>

        <div className="px-4">
          <ul className="flex items-center justify-center">
            <li>
              <Toggle />
            </li>
            <li className="flex gap-x-2">
              {user?.name ? (
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
