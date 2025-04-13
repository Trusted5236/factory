import { useEffect, useState } from "react"
import img from "../assets/assets/img1-300x252.jpg"
import Tilt from "react-parallax-tilt"
import Questions from "./Questions"
import ContactForm from "./ContactForm"
export default function FAQ1(){

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

    }, [])

    return(
        <div className="w-full h-auto md:flex md:flex-row md:items-start md:justify-start flex flex-col items-center justify-center">
            <div className="md:w-[60%] h-auto flex flex-col gap-y-[2rem] py-[4rem] px-[2rem] md:text-start text-center w-[100%]">
                <div>
                <p className="text-orange-600 text-[1.1rem]">F.A.Q</p>
                <h1 className="text-[2rem] font-bold">Frequently Asked Questions</h1>
                </div>
               <div>
               <p className="text-[1.2rem] text-slate-600">Most modern factories have large warehouses or warehouse-like facilities that contain heavy equipment used for assembly line production.</p>

               <Questions/>
               </div>
            </div>


            <div className={screen ? "w-[40%] flex flex-col items-end relative bottom-[7rem]" : "w-full flex flex-col items-center relative bottom-[7.5rem]"}>
                    <Tilt
                     glareEnable={true}
                     glareMaxOpacity={0}
                     glareColor="#ffffff"
                     glarePosition="bottom"
                     scale={0.95}
                     tiltMaxAngleX={10}
                     tiltMaxAngleY={10}
                     className={screen ? "relative top-[12rem] z-20 right-[2rem]" : "relative top-[7rem] px-[3rem] z-20"}
                    >
                         <img src={img} className={screen ? "w-[25rem]" : "w-[30rem]"}/>
                    </Tilt>
                    
                    <div className={screen ? "bg-orange-600 w-[5rem] px-[12rem] relative z-10 bottom-[20rem] py-[9rem] mt-[17rem] h-[7rem]" : "bg-orange-600 w-[10rem] py-[5rem]  relative z-10 left-[26%] bottom-[2rem]"}>
                    </div>

                    <ContactForm/>
            </div>
        </div>
    )
}