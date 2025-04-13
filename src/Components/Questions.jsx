import { HiOutlineLightBulb } from "react-icons/hi";
import Accordion from "./Accrodion";
import { useState } from "react";
import { FaReact } from "react-icons/fa";
export default function Questions(){
    const [activeIndex, setActiveIndex] = useState(null)
    const info = [
        {
            title: "Entire Production Line Installation",
            note:"We can assist you in the modernization of your facility, the installation and repair of your equipment, and general and preventive plant maintenance."
        },

        {
            title: "Small & Large Component Fabrication",
            note:"We can assist you in the modernization of your facility, the installation and repair of your equipment, and general and preventive plant maintenance."
        },

        {
            title: "Hard Facing & Corrosion Resistant Overlay",
            note:"We can assist you in the modernization of your facility, the installation and repair of your equipment, and general and preventive plant maintenance."
        },

        {
            title: "Pipe fitting Complete Piping Systems",
            note:"We can assist you in the modernization of your facility, the installation and repair of your equipment, and general and preventive plant maintenance."
        }
    ]


    return(
        <div className="pt-[5rem] flex flex-col gap-y-[4rem]">
            <div className="md:flex md:flex-col md:gap-y-6">
            <div className="md:flex md:flex-row md:gap-x-6 md:items-start md:justify-start flex flex-col items-center justify-center gap-y-3">
                <div className="bg-orange-600 px-[0.85rem] py-[1rem]">
                <HiOutlineLightBulb className="text-[3rem] text-white"/>
                </div>

                <div>
                    <h1 className="text-[2rem] font-bold">GENERAL QUESTIONS</h1>
                    <p className="text-slate-600 text-[1.3rem]">Frequently asked questions</p>
                </div>
            </div>

            <div className={screen? "" : "w-full h-auto"}>
                            {info.map((item, index)=>(
                                <div  key={index} className={screen ? "my-4" : "my-4 relative z-10"}>
                                    <Accordion
                                    title={item.title}
                                    content={item.note}
                                    active={activeIndex === index}
                                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                    />
                                </div>
                            ))}
                        </div>
        </div>

       <div className="md:flex md:flex-col md:gap-y-6">
        <div className="md:flex md:flex-row md:gap-x-6 flex flex-col items-center md:items-start md:justify-start justify-center gap-y-3">
                    <div className="bg-orange-600 px-[0.85rem] py-[1rem]">
                    <FaReact className="text-[3rem] text-white"/>
                    </div>

                    <div>
                        <h1 className="text-[2rem] font-bold">TECHNICAL QUESTIONS</h1>
                        <p className="text-slate-600 text-[1.3rem]">Frequently asked questions</p>
                    </div>
                </div>

                <div className={screen? "" : "w-full h-auto"}>
                            {info.map((item, index)=>(
                                <div  key={index} className={screen ? "my-4" : "my-4 relative z-10"}>
                                    <Accordion
                                    title={item.title}
                                    content={item.note}
                                    active={activeIndex === index}
                                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                    />
                                </div>
                            ))}
            </div>
        </div>

            
        </div>
    )
}