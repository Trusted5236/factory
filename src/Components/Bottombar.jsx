import { useEffect, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";
import { GrProjects } from "react-icons/gr";
import { CiMail } from "react-icons/ci";
import { NavLink } from "react-router-dom";

export default function Bottombar() {
  const [screen, setScreen] = useState(true);

  useEffect(() => {
    const handleScreen = () => {
      if (window.innerWidth < 768) {
        setScreen(true);
      } else {
        setScreen(false);
      }
    };

    window.addEventListener("resize", handleScreen);
    handleScreen();
  }, []);

  return (
    <div className={screen ? "w-full h-auto bg-black fixed bottom-0 z-20" : "hidden"}>
      <ul className="flex flex-row items-center justify-between px-[2rem] text-white  py-[1rem]">
        <NavLink to={"/"}>
          <li className="flex flex-col items-center justify-center hover:brightness-100 brightness-75 transition-all duration-500 ease-in-out">
            <IoHomeOutline className="text-orange-600 text-[1.5rem]"/>
            <p>Home</p>
          </li>
        </NavLink>

        <NavLink to={"about"}>
          <li className="flex flex-col items-center justify-center hover:brightness-100 brightness-75 transition-all duration-500 ease-in-out">
            <TfiWorld className="text-orange-600 text-[1.5rem]"/>
            <p>About</p>
          </li>
        </NavLink>

        <NavLink to={"projects"}>
          <li className="flex flex-col items-center justify-center hover:brightness-100 brightness-75 transition-all duration-500 ease-in-out">
            <GrProjects className="text-orange-600 text-[1.5rem]"/>
            <p>Projects</p>
          </li>
        </NavLink>

        <NavLink to={"contact"}>
          <li className="flex flex-col items-center justify-center hover:brightness-100 brightness-75 transition-all duration-500 ease-in-out">
            <CiMail className="text-orange-600 text-[1.5rem]"/>
            <p>Contact</p>
          </li>
        </NavLink>


      </ul>
    </div>
  );
}
