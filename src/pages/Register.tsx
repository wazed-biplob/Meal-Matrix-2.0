import { useState } from "react";
import { useRegisterMutation } from "../redux/api/baseApi";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [postData] = useRegisterMutation();
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const userData = await postData(user);
    console.log(userData);
    if (userData?.data?.insertedId) {
      navigate(`/login`);
    } else {
      alert("Somethng went wrong!");
    }
  };
  return (
    <div className="lg:m-10">
      <form
        onSubmit={handleSubmit}
        className="relative border border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10"
      >
        <h1 className="mb-6 text-xl font-semibold lg:text-2xl">Register</h1>

        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <label className=""> First Name </label>
            <input
              type="text"
              placeholder="Your Name"
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
              disabled
            />
          </div>
          <div>
            <label className=""> Last Name </label>
            <input
              type="text"
              placeholder="Last  Name"
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
              disabled
            />
          </div>
        </div>
        <div>
          <label className=""> Username </label>
          <input
            type="text"
            placeholder="Username"
            className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </div>
        <div>
          <label className=""> Email Address </label>
          <input
            type="email"
            placeholder="Info@example.com"
            className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div>
          <label className=""> Password </label>
          <input
            type="password"
            placeholder="******"
            className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>

        <div className="checkbox">
          <input type="checkbox" id="chekcbox1" checked />
          <label htmlFor="checkbox1">
            &nbsp;I agree to the
            <a href="#" target="_blank" className="text-blue-600">
              &nbsp;Terms and Conditions
            </a>
          </label>
        </div>

        <div>
          <button
            type="submit"
            className="mt-5 w-full rounded-md bg-slate-600 p-2 text-center font-semibold text-white"
          >
            Register Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
