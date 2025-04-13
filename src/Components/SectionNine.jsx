import { useEffect, useState } from "react"
import map1 from "../assets/assets/map1.png"
import map2 from "../assets/assets/map2.png"
import map3 from "../assets/assets/map2.png"
export default function SectionNine(){
    const info = [
        {
            map: map1,
            country: "London",
            adress:"1102 Stuart St. Pittsburgh"
        },

        {
            map: map2,
            country: "New York",
            adress:"#5 King St. Free Highway NY"
        },

        {
            map: map3,
            country: "Amsterdam",
            adress:"1523 Stuart St. Some Ave."
        },
    ]

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

    return(
        <div  className={screen ? "bg-black text-white flex flex-row w-full auto items-center justify-between px-[5rem] py-[3rem]" : "bg-black text-white flex flex-col w-full auto items-center justify-between px-[5rem] py-[1rem] border-t border-slate-600"}>
            {info.map((item, index)=>(
                <div key={index} className={screen ? "w-full h-auto" : ""}>
                    <div className={screen ? "relative" : ""}>
                        <img src={item.map}/>
                        
                        <div className={screen ? "relative bottom-[7rem] left-[2rem] flex flex-col items-start justify-center brightness-75" : "relative bottom-[7rem] left-[2rem] flex flex-col items-start justify-center brightness-75"}>
                        <h2 className="text-[2rem] font-bold">{item.country}</h2>
                        <p className="text-[1.1rem] text-slate-400">{item.adress}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}