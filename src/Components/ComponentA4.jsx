import { useEffect, useState } from "react"
import img from "../assets/assets/pr6-300x225.jpg"
import Tilt from "react-parallax-tilt"
import Accordion from "./Accrodion.jsx"

export default function ComponentA4(){
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

    const [screen, setScreen] = useState(true)

    useEffect(()=>{
        const handleScreen =()=>{
            if(window.innerWidth > 768){
                setScreen(true)
            }else{
                setScreen(false)
            }
        }

        window.addEventListener("resize", handleScreen)
        handleScreen()
    })

    const [activeIndex, setActiveIndex] = useState(null)

    return(
        <div className={screen ? "w-full h-auto flex flex-row px-[1rem] items-start justify-between " : "w-full h-auto flex flex-col gap-y-[5rem] px-[2rem] py-[3rem] items-start justify-start"}>

            <div className={screen? "w-1/2 h-auto my-[10rem]" : "w-full h-auto"}>
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

            
            <div className={screen ? "w-1/2 flex flex-col items-end relative bottom-[7rem]" : "w-full flex flex-col items-end relative bottom-[7.5rem]"}>
                    <Tilt
                     glareEnable={true}
                     glareMaxOpacity={0}
                     glareColor="#ffffff"
                     glarePosition="bottom"
                     scale={0.95}
                     tiltMaxAngleX={10}
                     tiltMaxAngleY={10}
                    >
                    <img src={img} className={screen ? "w-[35rem] relative top-[18rem] right-[2rem]" : "w-[50rem] relative top-[7rem] px-[3rem] "}/>
                    </Tilt>
                    <div className={screen ? "bg-orange-600 w-[5rem] px-[12rem] pt-[7rem] mb-[2rem] h-[20rem]" : "bg-orange-600 w-[10rem] pl-[10rem] mr-4 pt-[7rem] mt-[1rem] h-[2rem]"}></div>
            </div>

        </div>
    )
}