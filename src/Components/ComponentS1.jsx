import img1 from "../assets/assets/i1.png"
import img2 from "../assets/assets/i2.png"
import img3 from "../assets/assets/i3.png"
import img4 from "../assets/assets/i4.png"
import img5 from "../assets/assets/i5.png"
import img6 from "../assets/assets/i6.png"

import { useState } from "react"

export default function ComponentS1(){
    const info = [
        {
            img: img1,
            tittle:"Industrial Service",
            note:"Quality Only Happens When you Care Enough To Do Your Best"
        },

        {
            img: img2,
            tittle:"Power Plants",
            note:"Quality Only Happens When you Care Enough To Do Your Best"
        },

        {
            img: img3,
            tittle:"Construction",
            note:"Quality Only Happens When you Care Enough To Do Your Best"
        },

        {
            img: img4,
            tittle:"Machinery & CNC",
            note:"Quality Only Happens When you Care Enough To Do Your Best"
        },

        {
            img: img5,
            tittle:"Equipment Relocation",
            note:"Quality Only Happens When you Care Enough To Do Your Best"
        },

        {
            img: img6,
            tittle:"Oil & Gas Ind.",
            note:"Quality Only Happens When you Care Enough To Do Your Best"
        },


    ]

    const [indexNum, setIndex] = useState(null)

    const enterMouse = (index) =>{
        setIndex(index)
    }

    const leaveMouse = () =>{
        setIndex(null)
    }

    return(
        <div>
            <div className="w-full h-auto pt-[5rem] text-center">
                <p className="text-[1.3rem] text-orange-600">SERVICES</p>
                <h1 className="text-[3rem] font-bold">What We Do?</h1>
            </div>

            <div className="w-full h-auto flex flex-row items-center justify-center flex-wrap gap-y-[5rem] px-[1rem] py-[3rem] group gap-x-[3rem]">
                {info.map((item, index)=>(
                    <div key={index} className="md:w-[30%] lg:w-[30%] h-auto flex flex-col items-center justify-center gap-y-4" onMouseEnter={()=>enterMouse(index)} onMouseLeave={leaveMouse}>
                        <img src={item.img} className={indexNum === index ? "bg-black transition-all duration-500 ease-in-out" : "bg-orange-600"}/>
                        <h1 className="uppercase font-bold text-[1.5rem]">{item.tittle}</h1>
                        <p className="text-center text-slate-700 text-[1.1rem]">{item.note}</p>
                        
                    </div>
                ))}
            </div>


        </div>
    )
}
