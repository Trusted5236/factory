import { useEffect, useRef } from "react"
import img from "../assets/assets/l1.png"
import img1 from "../assets/assets/l2.png"
import img2 from "../assets/assets/l3.png"
import img3 from "../assets/assets/l4.png"
import img4 from "../assets/assets/l5.png"
import img5 from "../assets/assets/l6.png"
import Marquee from "react-fast-marquee"

export default function ComponentA5(){
   

    return(
            <Marquee className="bg-slate-200 w-full h-auto flex overflow-hidden py-[5rem] px-[2rem] items-center justify-between relative ">
            <img src={img} className="w-[13rem] bg-white p-[1rem] hover:bg-orange-600 transition-all duration-500 ease-in-out mx-[2rem]"/>
            <img src={img1} className="w-[13rem] bg-white p-[1rem] hover:bg-orange-600 transition-all duration-500 ease-in-out mx-[2rem]"/>
            <img src={img2} className="w-[13rem] bg-white p-[1rem] hover:bg-orange-600 transition-all duration-500 ease-in-out mx-[2rem]"/>
            <img src={img3} className="w-[13rem] bg-white p-[1rem] hover:bg-orange-600 transition-all duration-500 ease-in-out mx-[2rem]"/>
            <img src={img4} className="w-[13rem] bg-white p-[1rem] hover:bg-orange-600 transition-all duration-500 ease-in-out mx-[2rem]"/>
            <img src={img5} className="w-[13rem] bg-white p-[1rem] hover:bg-orange-600 transition-all duration-500 ease-in-out mx-[2rem]"/>
            </Marquee>
    )
}