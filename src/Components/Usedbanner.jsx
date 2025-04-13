import { IoMdHome } from "react-icons/io";
import { RiArrowDropRightLine } from "react-icons/ri";
import {NavLink } from "react-router-dom"


export default function Used({name, subName, num}){
    

    return(
        <div className="w-full h-auto flex flex-row items-center justify-between bg-[#3c3c3c] text-white px-[2rem] py-[0.5rem]">
            <h1 className="text-[2rem]">{name}</h1>

            <div className="flex flex-row items-center justify-start gap-x-3 text-[#8d99ae]">
                <NavLink to={"/"}><IoMdHome className="text-[1.3rem]"/></NavLink>
                <RiArrowDropRightLine className="text-[1.3rem]"/>
                <p>{subName}</p>
                <p className="text-lime-500">{num}</p>
            </div>
        </div>
    )
}