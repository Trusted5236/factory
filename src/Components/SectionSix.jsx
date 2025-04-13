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
        note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In sed quis nihil accusamus, deleniti velit suscipit maiores ab beatae pariatur? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, quos maiores? Dignissimos autem expedita unde?",
    },
    
    {
      id: 2,
      title: "Our Visions",
      subTitle: "Xtra Factory Visions",
      note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In sed quis nihil accusamus, deleniti velit suscipit maiores ab beatae pariatur? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, quos maiores? Dignissimos autem expedita unde?",
    },


    {
      id: 3,
      title: "Our Missions",
      subTitle: "Missions of Xtra",
      note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In sed quis nihil accusamus, deleniti velit suscipit maiores ab beatae pariatur? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, quos maiores? Dignissimos autem expedita unde?",
    },
  ];

  const [screen, setScreen] = useState(true);
  const [count, setCount] = useState(0)

  useEffect(() => {
    const handleScreen = () => {
      if (window.innerWidth < 768) {
        setScreen(false);
      } else {
        setScreen(true);
      }
    };
    handleScreen();
    window.addEventListener("resize", handleScreen);
  });

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

      <div className={screen? "bg-orange-600 w-[13rem] pt-[7rem]" : "bg-orange-600 w-[13rem] pt-[7rem]"}>
      </div>

      <div
        className={
          screen
            ? "w-full h-auto bg-black flex items-start flex-row justify-between relative"
            : "w-full h-auto bg-black flex flex-col relative items-start justify-start"
        }
      >
        <div className={screen ? "relative bottom-[6rem] pl-4 w-[50%]" : "relative bottom-[5.5rem] pl-4"}>
            <img src={image} className="w-[35rem]" />
        </div>

        <div className={screen ? "w-[50%]" : "w-full px-[3rem] py-[1rem]"}>
                    <div className="flex flex-col gap-y-2 pt-[2rem]">
                        <p className="text-[1.3rem] text-orange-600">{info[count].title}</p>
                        <h2 className="text-white text-[2.5rem] font-bold">{info[count].subTitle}</h2>
                        <p className="text-[1.2rem] py-[3rem] text-slate-400">{info[count].note}</p>
                    </div>

                    <div className={screen ? "flex flex-row items-center justify-start" : "flex flex-row items-center justify-center gap-x-3"}>
                        <IoArrowBackOutline className="text-[2rem] cursor-pointer text-slate-400" onClick={(e)=>goBack()}/>
                        <IoArrowForwardOutline className="text-[2rem] cursor-pointer text-slate-400" onClick={(e)=>goNext()}/> 
                    </div>
        </div>

      </div>
      
      <div className={screen ? "bg-orange-600 w-[18%] h-auto flex flex-col items-center justify-start gap-y-4 py-8 relative bottom-[12rem] left-[19rem] hover:translate-y-[-2rem] transiti duration-500 ease-in-out" : "bg-orange-600 w-[35%] h-auto flex flex-col items-center justify-start gap-y-4 py-8 relative bottom-[41rem] left-[19rem] hover:translate-y-[-2rem] transiti duration-500 ease-in-out"}>
            <img src={icon1w} className="w-[5rem]"/>
            <h1 className="text-white font-bold text-[3rem]">2434</h1>
            <p className="text-white text-[1.3rem]">Projects Done</p>
        </div>
    </div>
  );
}
