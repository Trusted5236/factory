import slide1 from "../assets/assets/slide1.jpg"
import { IoIosArrowRoundForward } from "react-icons/io"
export default function SectionOne(){

    return(
        <div className="bg-center bg-cover bg-no-repeat text-white font-roboto" style={{backgroundImage: `url(${slide1})`}}>
            <div className="lg:py-[8rem] py-[4rem] p-[2.5rem] flex flex-col gap-y-4">
            <div><p className="animate-flip lg:text-[1.5rem]">It's who we are. It's what we do.</p></div>
            <div><h1 className="animate-wave text-[2.5rem] lg:text-7xl w-full">We Build Trust, <br /> We're Xtra Factory</h1></div>
            <div className={`flex items-center flex-row gap-x-6 animate-slideIn`}>
                <button className="bg-orange-600 text-[0.5rem] px-4 py-2 lg:text-[1rem] lg:py-4 hover:bg-black transition-all duration-1000 ease-in-out">CONTACT US</button>

                <button className={`flex items-center border px-3 py-2 text-[0.5rem] lg:text-[1rem] lg:py-4 hover:bg-black hover:border-black transition-all duration-1000 ease-in-out`}>SEE PROJECTS <IoIosArrowRoundForward /></button>
            </div>
            </div>
        </div>
    )
}