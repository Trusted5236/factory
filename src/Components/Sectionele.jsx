import { useEffect, useState } from "react"

export default function SectionEleven(){
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
        <div className={screen ? "w-full h-auto bg-[#1e1e1e] text-white flex items-center justify-between px-[2rem] py-[1.5rem] brightness-75" : "w-full h-auto bg-[#1e1e1e] text-white flex flex-col items-center justify-center px-[2rem] py-[1.5rem] brightness-75 gap-y-8"}>
            <div>
                <p>© 2024 Xtra Theme, All rights reserved.</p>
            </div>

            <div className={screen ? "flex flex-row items-center gap-x-4" : "flex flex-row items-center gap-x-10"}>
                <p>Terms & Conditions</p>
                <p>Privacy & Policy</p>
            </div>
        </div>
    )
}