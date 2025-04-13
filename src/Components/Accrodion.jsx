
import { IoIosArrowDown } from "react-icons/io"
import { IoIosArrowUp } from "react-icons/io";

export default function Accordion({title, content, active, onClick}){
  

    return(
        <div className="w-full h-auto cursor-pointer">
            <div onClick={onClick} className={`flex items-center justify-between p-4 w-full transition-all duration-500 ease-in-out ${!active ? "bg-slate-200 text-[#5e5e5d]" : "bg-orange-600 text-white font-bold text-[1.3rem]"}`}>

                <p>{title}</p>
                <div>{active ? <IoIosArrowUp className="text-[1.5rem] text-[#5e5e5d]"/> : <IoIosArrowDown className="text-[1.5rem] text-[#5e5e5d]"/> }</div>
            </div>

            <div className="transition-all duration-500 ease-in-out">
            {active && <div className="bg-black text-white text-[1.2rem] py-[2rem] px-[2rem] transition-all duration-500 ease-in-out">{content}</div>}
            </div>
        </div>
    )
}