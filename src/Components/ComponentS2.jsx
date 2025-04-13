import { useEffect, useState } from "react"
import bg1 from "../assets/assets/bg2.jpg"

export default function ComponentS2(){

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
        <div style={{backgroundImage: `url(${bg1})`}} className="bg-cover bg-center bg-no-repeat relative">
            
            <div className="w-full h-auto pt-[6rem] pb-[15rem] text-center">
                <p className="text-[1.3rem] text-orange-600">FREE CONSULTATION</p>
                <h1 className="text-white text-[3rem] font-bold">Do You Have any Questions?</h1>
            </div>

            <div className={screen ? "w-full h-auto flex flex-row items-center justify-center px-[2rem] absolute top-[18rem]" : "w-full h-auto flex flex-col items-center justify-center px-[2rem] absolute top-[18rem]"}>

                <div className={screen ? "flex flex-col bg-black text-white py-[8rem] px-[4rem] text-center gap-y-[4rem] h-[35rem] w-[50%] shadow-lg shadow-slate-300" : "flex flex-col bg-black text-white py-[4rem] px-[2rem] text-center gap-y-[4rem] h-[30rem] w-[100%] shadow-lg shadow-slate-300"}>
                    <p className="text-[1.6rem]">GET FREE QUOTE</p>
                    <h1 className={screen ? "text-[3rem] font-bold text-orange-600" : "text-[2rem] font-bold text-orange-600"}>NEED <br />CONSULTATION?</h1>
                    <p className="text-[1.5rem] text-center">Feel free to contact us and ask your question, its absolutely free</p>
                </div>

                <form action="" className={screen ? "px-[4rem] py-[8rem] bg-white h-[35rem] flex flex-col w-[50%] gap-y-6 shadow-lg shadow-slate-300" : "px-[2rem] py-[4rem] bg-white h-[30rem] flex flex-col w-[100%] gap-y-6 shadow-lg shadow-slate-300"}>
                   <div className="flex flex-row gap-x-4 w-full h-auto">
                   <div>
                        <input type="text" name="Name" placeholder="Your Name(*)" className="border-[1px] outline-none px-[1rem] py-[0.85rem] w-[100%] focus:border-orange-600 transition-all duration-500 ease-in-out"/>
                    </div>

                    <div>
                        <input type="text" name="Email" placeholder="Your Email(*)" className="border-[1px] outline-none px-[1rem] py-[0.85rem] w-[100%] focus:border-orange-600 transition-all duration-500 ease-in-out"/>
                    </div>
                   </div>

                  <div className="flex flex-row gap-x-4 w-full h-auto">
                  <div>
                        <input type="text" name="subject" placeholder="Subject" className="border-[1px] outline-none px-[1rem] py-[0.85rem] w-[100%] focus:border-orange-600 transition-all duration-500 ease-in-out"/>
                    </div>

                    <select name="Business" className="border-[1px] outline-none px-[1rem] py-[0.85rem] w-[50%] text-slate-600 focus:border-orange-600 transition-all duration-500 ease-in-out">
                        <option value="">Business Department</option>
                        <option value="">Personal Department</option>
                        <option value="">Support Department</option>
                        <option value="">Others</option>
                    </select>
                  </div>

                    <div>
                        <textarea name="note" placeholder="Your message" className="border-[1px] outline-none w-[100%] py-[1rem] px-[1rem] h-[9rem] focus:border-orange-600 transition-all duration-500 ease-in-out"></textarea>
                    </div>

                    <div className={screen ? "flex flex-row items-center justify-end" : "flex flex-row items-center justify-center"}>
                        <button className="bg-orange-600 text-white px-[2rem] py-[0.85rem] hover:bg-black transition-all duration-500 ease-in-out">Send Message</button>
                    </div>

                </form>

            </div>
        </div>
    )
}