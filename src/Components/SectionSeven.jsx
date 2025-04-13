import { useEffect, useState } from "react"
import img1 from "../assets/assets/pr2-300x225.jpg"
import img2 from "../assets/assets/pr3-300x225.jpg"
import img3 from "../assets/assets/pr4-300x225.jpg"
import { IoMenuOutline } from "react-icons/io5";

export default function SectionSeven(){

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

    const info = [
        {
            img: img1,
            date: "1 December 2024",
            note: "How to Be Ahead of Stock Changes"
        },

        {
            img: img2,
            date: "1 December 2024",
            note: "Online Reputation And Management"
        },

        {
            img: img3,
            date: "1 December 2024",
            note: "Tips To Move Your Project More Forward"
        },
    ]


    return(
        <div className={screen ? "relative bottom-[6rem] w-full h-auto" : "relative bottom-[8rem] w-full h-auto"}>

            <div className="flex flex-col items-center justify-start">
                <p className="text-orange-600 text-[1.3rem]">LATEST NEWS</p>
                <h1 className="font-bold text-[3rem] pb-[2rem]">Don't Miss Anything</h1>
            </div>

            <div className={screen ? "flex flex-row items-start justify-around flex-wrap w-full h-auto" : "flex flex-row items-start justify-start flex-wrap w-full h-auto gap-x-[2rem] px-2"}>
                {info.map((item, index)=>(
                    <div className="group" key={index}>
                        <div className="group-hover:brightness-50 transition-all duration-500 ease-in-out">
                            <img src={item.img} className={screen ? "w-[22rem]" : ""} />
                        </div>

                        <div className={screen ? "bg-white shadow-lg w-[20rem] px-[3rem] py-[1rem] flex flex-col items-center justify-start mx-auto relative bottom-[4rem] group-hover:bg-black group-hover:text-white transition-all duration-500 ease-in-out" : "bg-white shadow-lg w-[15rem] px-[3rem] py-[1rem] flex flex-col items-center justify-start mx-auto relative bottom-[4rem] group-hover:bg-black group-hover:text-white transition-all duration-500 ease-in-out"}>
                            <p className="bg-orange-600 w-fit px-3 py-1 text-white text-[0.85rem] relative bottom-[2rem] right-[3rem] ">{item.date}</p>

                            <p className="text-[1.3rem] font-bold flex flex-col items-center justify-start ">{item.note}</p>
                        </div>
{/* 
                        <div className="relative bottom-[18rem] left-[8rem]">
                        <IoMenuOutline className="text-white text-[3rem]"/>
                        </div> */}
                    </div>
                ))}
            </div>

        </div>
    )
}