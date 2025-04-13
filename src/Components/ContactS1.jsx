
import img1 from "../assets/assets/phone.png"
import img2 from "../assets/assets/email.png"
import img3 from "../assets/assets/location.png"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function ContactS1(){

    const [indexNum, setIndex] = useState(null)

    const info = [
        {
            icon: img1,
            description:"Phone",
            value:"+234 7036529366"
        },

        {
            icon: img2,
            description:"Email",
            value:"trustagbata@gmail.com"
        },

        {
            icon: img3,
            description:"Office Address",
            value:"	47 Herbert Macaulay Str, Port-Harcourt Rivers",
            link:"https://www.google.com/maps/@6.5349655,3.3892904,15z?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D"
        },
    ]

    const handleMouse =(index)=>{
        setIndex(index)
    }

    return(


        <div className={'w-full h-auto flex flex-col gap-y-[2rem] md:flex md:flex-row px-[2rem] py-[4rem] gap-x-[2rem]'}>
            {info.map((item, index)=>(
                <div onMouseEnter={()=>handleMouse(index)} onMouseLeave={()=>setIndex(null)} className="w-full flex flex-row gap-x-[1rem] items-center">
                    <div className="w-fit">
                       <a href={item.link}>
                       <img src={item.icon} className={`w-[5rem] p-[1rem] h-auto ${indexNum === index ? "bg-gray-400 transition-all duration-500 ease-in-out" : "bg-orange-600" }`}/>
                       </a>
                    </div>

                    <div>
                     <a href={item.link}>
                     <h1 className="font-bold text-[1.4rem]">{item.description}</h1>
                     <p className="text-gray-600 text-[1.1rem]">{item.value}</p>
                     </a>
                       
                    </div>
                </div>
            ))}
        </div>
    )
}