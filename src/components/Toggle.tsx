import { useEffect, useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    if (toggle) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  });
  return (
    <div className="flex gap-5 mx-2">
      <button
        onClick={() => setToggle((prev) => !prev)}
        className={`flex h-fit w-[34px] items-center rounded-sm border ${
          toggle ? "bg-gray-400 duration-500" : "bg-white duration-300"
        }`}
      >
        <div
          className={`size-4 rounded-sm bg-black duration-300 ${
            toggle ? "translate-x-4" : "translate-x-0"
          }`}
        ></div>
      </button>
    </div>
  );
};

export default Toggle;
