import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

export default function SectionTen(){
    const [screen, setScreen] = useState(true)
    useEffect(()=>{
        const handleScreen = ()=>{
            if(window.innerWidth > 768){
                setScreen(true)
            }else{
                setScreen(false)
            }
        }

        window.addEventListener("resize", handleScreen)
        handleScreen()
    })

    return(
        <div className={screen ? "bg-black w-full h-auto text-white border-t border-slate-600 flex flex-row items-center justify-between py-[4rem] px-[2rem]" : "bg-black w-full h-auto text-white border-t border-slate-600 flex flex-col items-center justify-between py-[4rem] px-[2rem] gap-y-[2rem]"}>
            <div>
                <img src="../logo.png"/>
            </div>

            <div>
                <ul className={screen ? "flex flex-row items-center gap-x-4 text-[0.85rem]" : ""}>
                <NavLink to={"/"}><li>HOME</li></NavLink>

                <NavLink to={"about"}><li>ABOUT</li></NavLink>

                <NavLink to={"services"}><li>SERVICES</li></NavLink>

                <NavLink to={"projects"}><li>PROJECTS</li></NavLink>

                <NavLink to={"contacts"}><li>CONTACT</li></NavLink>
                </ul>
            </div>

            <div className={screen ? "flex flex-row items-center gap-x-4" : "flex flex-row items-center gap-x-4"}>
                <FaFacebookSquare className="text-[2.5rem] border border-orange-600 p-2"/>
                <FaXTwitter className="text-[2.5rem] border border-orange-600 p-2"/>
                <FaSquareInstagram className="text-[2.5rem] border border-orange-600 p-2"/>
            </div>
        </div>
    )
}