import { useEffect, useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState<string>(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    if (toggle === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [toggle]);

  useEffect(() => {
    localStorage.setItem("theme", toggle);
  }, [toggle]);

  return (
    <div className="flex gap-5 mx-2">
      <button
        onClick={() =>
          setToggle((prev) => (prev === "dark" ? "light" : "dark"))
        }
        className={`flex h-fit w-[34px] items-center rounded-sm border ${
          toggle === "dark"
            ? "bg-gray-400 duration-500"
            : "bg-white duration-300"
        }`}
      >
        <div
          className={`size-4 rounded-sm bg-black duration-300 ${
            toggle === "dark" ? "translate-x-4" : "translate-x-0"
          }`}
        ></div>
      </button>
    </div>
  );
};

export default Toggle;
