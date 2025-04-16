import { useEffect, useState } from "react";
import image from "../assets/assets/img4-300x250.jpg";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoArrowForwardOutline } from "react-icons/io5";
import icon1w from "../assets/assets/icon2h.png"
export default function SectionSix() {
  const info = [
    {
        id: 1,
        title: "Our History",
        subTitle: "Founding of Xtra Factory",
        note: "Founded in 1998, XFactory began as a small manufacturing unit with a mission to redefine industrial production through precision, quality, and innovation. Over the years, we’ve evolved into a leading force in the manufacturing sector—partnering with businesses across industries, scaling operations globally, and continuously investing in cutting-edge technology and sustainable practices.",
    },
    
    {
      id: 2,
      title: "Our Visions",
      subTitle: "Xtra Factory Visions",
      note: "At XFactory, we envision a future where manufacturing isn't just about output—it's about smart solutions, sustainable growth, and long-term partnerships. Our goal is to become a global benchmark in modern manufacturing by combining advanced engineering, data-driven efficiency, and an unwavering commitment to quality. We’re building the future—where every product is a promise kept, and every client is a partner in progress.",
    },


    {
      id: 3,
      title: "Our Missions",
      subTitle: "Missions of Xtra",
      note: "At XFactory, our mission is to deliver world-class manufacturing solutions that empower our clients to innovate, scale, and lead in their industries. We are committed to precision, reliability, and continuous improvement—producing high-quality products through ethical practices, cutting-edge technology, and a team-driven culture. Every order, every process, every partnership—we build with purpose.",
    },
  ];

  const [count, setCount] = useState(0)


  const goNext = (e)=>{
    console.log("helle")
    setCount((prevCount)=>(prevCount + 1) % info.length)
  }

  const goBack = (e)=>{
    console.log("hello")
    setCount((prevCount)=>(prevCount - 1 + info.length) % info.length)
  }

  return (
    <div className="w-full h-auto mt-[3rem] ">

      <div className= "md:hidden lg:flex hidden bg-orange-600 w-[13rem] pt-[7rem]">
      </div>

      <div
        className="w-full h-auto bg-black flex items-start flex-col md:flex-col lg:flex-row  relative"
      >
        <div className=" md:hidden lg:flex hidden relative lg:bottom-[5rem] pl-4 w-[50%]">
            <img src={image} className="w-[35rem]" />
        </div>

        <div className="lg:w-[50%] md:w-full w-full px-[2rem] py-[2rem]">
                    <div className="flex flex-col gap-y-2 ">
                        <p className="text-[1.5rem] text-orange-600">{info[count].title}</p>
                        <h2 className="text-white text-[2.5rem] font-bold">{info[count].subTitle}</h2>
                        <p className="text-[1.2rem] md:text-[1.5rem] py-[1rem] text-slate-400">{info[count].note}</p>
                    </div>

                    <div className="flex flex-row md:items-center lg:items-center lg:justify-start md:justify-center justify-center">
                        <IoArrowBackOutline className="text-[2rem] cursor-pointer text-slate-400" onClick={(e)=>goBack()}/>
                        <IoArrowForwardOutline className="text-[2rem] cursor-pointer text-slate-400" onClick={(e)=>goNext()}/> 
                    </div>
        </div>

      </div>
      
      <div className="bg-orange-600 w-[18%] h-auto hidden  md:hidden lg:flex flex-col items-center justify-start gap-y-4 py-8 relative bottom-[12rem] left-[19rem] hover:translate-y-[-2rem] transiti duration-500 ease-in-out" >
            <img src={icon1w} className="w-[5rem]"/>
            <h1 className="text-white font-bold text-[3rem]">2434</h1>
            <p className="text-white text-[1.3rem]">Projects Done</p>
        </div>
    </div>
  );
}
