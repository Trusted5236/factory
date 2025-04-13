import { useState, useEffect } from "react"

export default function ContactS2(){

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
        <div className="md:flex md:flex-row md:items-start md:justify-start w-full pt-[4rem]">
            <div className="text-center pt-[4rem] px-[2rem] flex flex-col items-center justify-center gap-y-[1rem] md:w-[50%] md:text-start md:items-start">
                <p className="text-[1.3rem] font-bold text-orange-600">GET IN TOUCH</p>
                <h1 className="text-[2rem] font-bold ">CONTACT US</h1>
                <p className="text-[1.1rem] tracking-wide text-slate-600">Factories arose with the introduction of machinery during the Industrial Revolution when the capital and space requirements became too great for cottage industry or workshops.</p>
            </div>

            <form className={screen ? "px-[4rem] py-[4rem] bg-white h-[35rem] flex flex-col w-[50%] gap-y-6" : "px-[2rem] py-[4rem] bg-white h-[30rem] flex flex-col w-[100%] gap-y-6"}>
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
    )
}