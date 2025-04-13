import { useEffect, useState } from "react"
import { GrStatusGood } from "react-icons/gr";
import img from "../assets/assets/img4-300x250.jpg"
import Tilt from "react-parallax-tilt"


export default function ComponentA1(){

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
    }, [])

    const info = [
        {
            icon: <GrStatusGood />,
            title: "Construction",
            note:"Expert & modern systems"
        },

        {
            icon: <GrStatusGood />,
            title: "Environmental",
            note:"Waste management"
        },

        {
            icon: <GrStatusGood />,
            title: "Electrical Service",
            note:"Electrical supply stores"
        },

        {
            icon: <GrStatusGood />,
            title: "Machinery",
            note:"Equipment reloaction"
        }

       
    ]

    return(
        <div>
            <div className={screen ? "w-full h-auto flex flex-row gap-x-4 items-start justify-start" : "w-full h-auto flex flex-col gap-y-4 items-start justify-start"}>

                <div className={screen ? "w-1/2 px-[2rem] py-[5rem] flex flex-col items-start justify-start" : "w-full py-[5rem] px-[2rem] flex flex-col items-center justify-center text-center"}>
                    <p className="text-[1.3rem] text-orange-600">ABOUT OUR COMPANY</p>
                    <h1 className="text-[3rem] font-bold pb-[2rem]">Our History</h1>
                    <p className="leading-loose text-[1.1rem] pb-[3rem]">A factory, manufacturing plant or a production plant is an industrial site, usually a complex consisting of several buildings filled with machinery, where workers manufacture items or operate machines which process each item into another where workers manufacture items or operate machines which process each item into another where workers manufacture items or operate machines which process each item into another where workers manufacture items or operate machines which process each item into another.</p>

                    <div className={screen ? "w-full h-auto flex flex-row flex-wrap gap-x-[3rem] items-start justify-start" : "w-full h-auto flex flex-col items-start justify-start"}>
                    {info.map((item, index)=>(
                        <div key={index} className={screen ? " flex items-center flex-row gap-x-6 group py-4"  : "flex items-center flex-row gap-x-6 group py-4 text-start"}>
                            <p className="bg-orange-600 px-[1rem] text-[1.5rem] py-[1rem] group-hover:text-white group-hover:bg-black group-hover:scale-125 transition-all duration-500 ease-in-out">{item.icon}</p>
                            <div>
                                <h2 className="text-[1.4rem] font-bold">{item.title}</h2>
                                <p className="text-[1rem] text-slate-500">{item.note}</p>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>

                <div className={screen ? "w-1/2 flex flex-col items-end relative bottom-[12rem]" : "w-full flex flex-col items-end relative bottom-[10rem]"}>
                    <div className="w-full h-auto relative pointer-events-auto">
                    <Tilt
                     glareEnable={true}
                     glareMaxOpacity={0}
                     glareColor="#ffffff"
                     glarePosition="bottom"
                     scale={0.95}
                     tiltMaxAngleX={10}
                     tiltMaxAngleY={10}
                     
                    >
                    <img src={img} className={screen ?"w-[35rem] relative top-[18rem] z-10" : "w-[35rem] relative top-[7rem] px-[3rem] "}/>
                    </Tilt>

                    </div>
                    <div className={screen ? "bg-orange-600 w-[5rem] px-[12rem] pt-[7rem] mb-[2rem] h-[20rem]" : "bg-orange-600 w-[10rem] pl-[10rem] mr-4 pt-[7rem] mt-[1rem] h-[2rem]"}></div>
                </div>
            </div>
        </div>
    )
}