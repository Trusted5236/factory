import { useEffect, useState } from "react";
import image from "../assets/assets/img4-300x250.jpg";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoArrowForwardOutline } from "react-icons/io5";

export default function ComponentA3() {
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
    <div className="w-full h-auto relative top-[5rem]">

      <div className={screen? "bg-orange-600 w-[13rem] pt-[5rem]" : "bg-orange-600 w-[13rem] pt-[5rem]"}>
      </div>

      <div
        className={
          screen
            ? "w-full h-auto bg-black flex items-start flex-row justify-between relative"
            : "w-full h-auto bg-black flex flex-col relative items-start justify-start"
        }
      >
        <div className={screen ? "relative bottom-[4rem] pl-4 w-[50%]" : "relative bottom-[3.5rem] pl-4"}>
            <img src={image} className="w-[35rem]" />
        </div>

        <div className={screen ? "w-[50%]" : "w-full px-[3rem]"}>
                    <div className="flex flex-col gap-y-2 pt-[3rem]">
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
    </div>
  );
}
