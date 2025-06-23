import { useState } from "react";
import { useLoginMutation } from "../redux/api/baseApi";
import { useAppDispatch } from "../redux/feature/hook";
import { addUser } from "../redux/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const [postData] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { data } = await postData(user).unwrap();
    dispatch(addUser(data));
    if (data?.email) {
      navigate(`/dashboard`);
    } else {
      alert("Something went wrong!");
    }
  };
  return (
    <div>
      <div className="flex flex-wrap">
        <div className="flex w-full flex-col md:w-1/2">
          <div className="flex justify-center pt-12 md:-mb-24 md:justify-start md:pl-12"></div>
          <div className="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col pt-3 md:pt-8"
            >
              <div className="flex flex-col pt-4">
                <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                  <input
                    type="email"
                    className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                    placeholder="Email"
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="mb-12 flex flex-col pt-4">
                <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                  <input
                    type="password"
                    className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                    placeholder="Password"
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2"
              >
                Log in
              </button>
            </form>
            <div className="py-12 text-center">
              <p className="whitespace-nowrap text-gray-600">
                Don't have an account?
                <Link
                  to="/register"
                  className="underline-offset-4 font-semibold text-gray-900 underline"
                >
                  &nbsp;Sign up for free.
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-1/2">
          <div className="absolute bottom-0 z-10 px-8 text-white opacity-100">
            <p className="mb-8 text-sm font-semibold">
              Log in now to access your personalized dashboard, where you can
              save your favorite recipes, track your cooking progress, and join
              a vibrant community of food enthusiasts. Whether you're looking to
              explore new cuisines, improve your cooking skills, or find healthy
              meal options, FoodMaster is here to support your culinary
              endeavors. Stay updated with our latest features, including video
              tutorials, cooking challenges, and live sessions with renowned
              chefs. Your journey to becoming a food master starts here. Let's
              cook, learn, and enjoy together!
            </p>

            <p className="mb-7 text-sm opacity-70">Meal-Matrix Corporation</p>
          </div>
          <img
            className="-z-1 absolute top-0 h-full w-full object-cover opacity-40"
            src="https://i.ibb.co/n3RwTyN/shrimp.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
