import { useEffect, useState } from "react"
import { IoFlask } from "react-icons/io5"


export default function SectionEight(){
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
            <div className={screen ? "w-full h-auto flex items-center flex-row justify-between bg-black text-white py-[4rem] px-[1rem] border-b border-slate-600" : "w-full h-auto flex items-center flex-col justify-between bg-black text-white py-[2rem] px-[1rem] gap-y-8 mb-[rem]"}>
                <div className="">
                    <h1 className="text-[2rem] font-bold">Get Your Free Quote Right Now</h1>
                </div>

                <div className={screen ? "flex flex-row items-center justify-start gap-x-3" : "flex flex-col items-center justify-start gap-y-3"}>
                   
                    <input 
                    type="search" 
                    placeholder="Enter Your Email..."
                    className={screen ? 'px-[2rem] py-[1rem] w-[100%] h-auto bg-[#1e140a] outline-none text-white' : 'px-[2rem] py-[1rem] w-[100%] h-auto bg-[#1e140a] outline-none text-white'}
                    />

                    <button className={screen ? 'py-[1rem] px-[2rem] w-[100%] bg-orange-600' : "py-[1rem] px-[2rem] w-[100%] bg-orange-600"}>Get Free Quote</button>
                </div>
            </div>
    )
}