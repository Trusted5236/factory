import bg1 from "../assets/assets/bg1.jpg"
import icon1 from "../assets/assets/icon2.png"
import icon2 from "../assets/assets/icon1.png"
import icon1w from "../assets/assets/icon2h.png"
import icon2w from "../assets/assets/icon1h.png"
import icon4 from "../assets/assets/icon4.png"
import icon4w from "../assets/assets/icon4h.png"
import icon3 from "../assets/assets/icon3.png"
import icon3w from "../assets/assets/icon3h.png"
import { useEffect, useState } from "react"
export default function(){
    const items = [
        {   id: 0,
            icon: icon1,
            iconHover: icon1w,
            text: "Building Materials",
            note:   "A factory, manufacturing plant or a production plant is and industrial."
        },
       
        {   id: 1,
            icon: icon2,
            iconHover: icon2w,
            text: "Top Specialists",
            note:   "A factory, manufacturing plant or a production plant is and industrial."
        },

        {   id: 2,
            icon: icon3,
            iconHover: icon3w,
            text: "Accurate Planning",
            note:   "A factory, manufacturing plant or a production plant is and industrial."
        },

        {   id: 3,
            icon: icon4,
            iconHover: icon4w,
            text: "Building Materials",
            note:   "A factory, manufacturing plant or a production plant is and industrial."
        },
      ];

    
    const [img, setImg] = useState(false)

    const handleItem = (id)=>{
        setImg(id)
    }

    const leaveItem = (id)=>{
        setImg(false)
    }

    const [large, setLarge] = useState(true)

   useEffect(()=>{
    const handleScreen = (e)=>{
        setLarge(window.innerWidth > 768)
    }

    handleScreen()
    window.addEventListener("resize", handleScreen)
   }, [])


    return(
        <div style={{backgroundImage:`url(${bg1})`}} className="bg-center bg-cover bg-no-repeat text-white font-roboto h-auto w-full pb-[10rem]">
            <div className={`${large ? "text-center pt-[7rem]" : "text-center p-[5rem]"}`}>
                <p className="text-orange-600 text-[1.3rem]">OUR SERVICES</p>
                <h1 className="text-[3.5rem] font-bold">What We Offer & <br /> What We Do.</h1>
                <p className="text-[1.2rem] text-gray-300">A factory, manufacturing plant or a production plant is an industrial site.</p>
            </div>

            <div className="relative w-full h-100%">
            <div className="flex flex-col md:flex-col lg:flex-row justify-center absolute top-[-2.5rem] lg:top-[2rem] gap-y-[2.5rem] items-center w-full h-auto px-[1.5rem] md:top-[4rem]">
                {items.map((item, index)=>(
                    <div key={item.id} onMouseEnter={(e)=>handleItem(item.id)} onMouseLeave={(e)=>leaveItem(item.id)} className="w-full h-auto">

                    <div className="flex flex-col justify-around items-center my-0 mx-3 bg-white text-black px-[1.5rem] py-[3.5rem] hover:bg-orange-600 hover:text-white h-[100%] gap-y-4 hover:translate-y-[-1.5rem] transition-all duration-500 ease-in-out shadow-lg shadow-[grey]">

                        {img === item.id ? (<div>
                                        <img src={item.iconHover}/>
                                    </div>) : (<div>
                                        <img src={item.icon}/>
                                </div>)}

                                <h1 className="text-center font-bold text-[1.6rem]">{item.text}</h1>
                                <p className="text-[1rem] text-center">{item.note}</p>
                          
                          </div>

                    </div>
                ))}
               
            </div>
            </div>
        </div>
    )
}