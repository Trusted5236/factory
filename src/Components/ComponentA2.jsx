import Effect from "./Numbereffect.jsx"
import bg1 from "../assets/assets/bg1.jpg"
import { useEffect, useState } from "react"
export default function ComponentA2(){

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
  

    return(
        <div style={{backgroundImage:`url(${bg1})`}} className="w-full h-auto bg-cover bg-no-repeat bg-center text-white">
            <div className={screen? "w-full h-auto py-[5rem]" : "w-full h-auto py-[5rem]"}>

            <div className="flex flex-col items-center justify-center gap-y-6 ">
                <p className="text-[1.3rem] text-orange-600">OUR RESULTS</p>
                <h1 className="text-[3rem] font-bold">What We Did?</h1>
            </div>

           <div className={screen ? "w-full h-auto flex flex-row items-center justify-center gap-x-[2rem] pt-[3rem]" : "w-full h-auto flex flex-col items-center justify-center gap-y-[4rem] pt-[3rem]"}>

         <div className="group">
         <div className={screen ? "bg-[rgba(0,0,0,0.5)] px-[2.5rem] py-[1rem] shadow-lg shadow-black group-hover:bg-white  group-hover:scale-110 group-hover:translate-y-[-1rem]  transition-all duration-500 ease-in-out" : "bg-[rgba(0,0,0,0.5)] px-[4rem] py-[1rem] shadow-lg shadow-black group-hover:bg-white  group-hover:scale-110 group-hover:translate-y-[-1rem]  transition-all duration-500 ease-in-out"}>
                <p className="text-[5rem] text-orange-600 border-b-[0.1rem] border-slate-600 text-center">{<Effect n={23} bol={"+"}/>}</p>
                <p className="text-[1.5rem] pt-[1rem] group-hover:text-black  transition-all duration-500 ease-in-out">Years of Experience</p>
            </div>
         </div>

          <div className="group">
          <div className={screen ? "bg-[rgba(0,0,0,0.5)] px-[2.5rem] py-[1rem] shadow-lg shadow-black group-hover:bg-white  group-hover:scale-110 group-hover:translate-y-[-1rem]  transition-all duration-500 ease-in-out" : "bg-[rgba(0,0,0,0.5)] px-[4rem] py-[1rem] shadow-lg shadow-black group-hover:bg-white  group-hover:scale-110 group-hover:translate-y-[-1rem]  transition-all duration-500 ease-in-out"}>
                <p className="text-[5rem] text-orange-600 border-b-[0.1rem] border-slate-600 text-center"><Effect n={150} bol={"+"}/></p>
                <p className="text-[1.5rem] pt-[1rem] group-hover:text-black  transition-all duration-500 ease-in-out">Expert Engineers</p>
            </div>
          </div>

            <div className="group">
            <div className={screen ? "bg-[rgba(0,0,0,0.5)] px-[2.5rem] py-[1rem] shadow-lg shadow-black group-hover:bg-white  group-hover:scale-110 group-hover:translate-y-[-1rem]  transition-all duration-500 ease-in-out" : "bg-[rgba(0,0,0,0.5)] px-[4rem] py-[1rem] shadow-lg shadow-black group-hover:bg-white  group-hover:scale-110 group-hover:translate-y-[-1rem]  transition-all duration-500 ease-in-out"}>
                <p className="text-[5rem] text-orange-600 border-b-[0.1rem] border-slate-600 text-center">{<Effect n={90} bol={""}/>}</p>
                <p className="text-[1.5rem] pt-[1rem] group-hover:text-black  transition-all duration-500 ease-in-out">Branches in World</p>
            </div>
            </div>

           <div className="group">
           <div className={screen ? "bg-[rgba(0,0,0,0.5)] px-[2.5rem] py-[1rem] shadow-lg shadow-black group-hover:bg-white  group-hover:scale-110 group-hover:translate-y-[-1rem]  transition-all duration-500 ease-in-out" : "bg-[rgba(0,0,0,0.5)] px-[4rem] py-[1rem] shadow-lg shadow-black group-hover:bg-white  group-hover:scale-110 group-hover:translate-y-[-1rem]  transition-all duration-500 ease-in-out"}>
                <p className="text-[5rem] text-orange-600 border-b-[0.1rem] border-slate-600 text-center"><Effect n={3} bol={"+"}/></p>
                <p className="text-[1.5rem] pt-[1rem] group-hover:text-black  transition-all duration-500 ease-in-out">Projects Done</p>
            </div>
           </div>

           </div>

            </div>
        </div>
    )
}