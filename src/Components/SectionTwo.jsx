import { GrStatusGood } from "react-icons/gr";
import img1 from "../assets/assets/img2-260x300.png"
import img2 from "../assets/assets/img3-277x300.jpg"
import img3 from "../assets/assets/img1-300x252.jpg"

export default function SectionTwo(){

    return(
        <div className={`flex flex-row justify-between font-roboto`}>
            <div className={`lg:w-1/2 lg:px-[5rem] lg:py-[4rem] flex flex-col lg:gap-y-8 gap-y-4 justify-center px-[2.5rem] py-[2rem]`}>
                <p className="text-orange-600 lg:text-start text-center">ABOUT OUR COMPANY</p>

                <h1 className="lg:text-[3rem] font-bold lg:text-start text-center text-[3rem]">We Build Trust, <br />We're X Factory</h1>

                <p  className="lg:text-start text-center lg:text-[1.2rem] text-[1.2rem]">A factory, manufacturing plant or a production plant is an industrial site, usually a complex consisting of several buildings filled with machinery, where workers manufacture items or operate machines which process each item into another.</p>

                <div className="flex flex-row gap-x-4 justify-around">
                    <p className="flex flex-row gap-x-2 items-center text-[1.3rem] font-bold flex-wrap"><GrStatusGood className="text-orange-600"/> Best Quality</p>

                    <p className="flex flex-row gap-x-2 items-center text-[1.3rem] font-bold flex-wrap"><GrStatusGood className="text-orange-600"/> Pro Experts</p>

                    <p className="flex flex-row gap-x-2 items-center text-[1.3rem] font-bold flex-wrap"><GrStatusGood className="text-orange-600"/> Fast Delivery</p>
                </div>

                <div className="flex items-center lg:justify-start justify-center"><button className={`text-white bg-orange-600 flex items-center border px-8 py-4 text-[0.9rem] lg:text-[1rem] lg:py-4 lg:px-[2.5rem] hover:animate-straight`}>ABOUT US</button></div>
            </div>

            <div className="hidden md:hidden lg:flex bg-slate-300 w-[100%] max-w-[50%] h-[35rem]">
                <img src={img1} className={`absolute left-[35rem] top-[45rem] w-[18rem] z-10`} alt="" />
                <img src={img2} className={`absolute top-[55rem] left-[56rem] w-[19rem] z-10`} alt="" />
                <img src={img3} className={`absolute w-[19rem] left-[56rem] top-[35rem] z-10`} alt="" />
            </div>

        </div>
    )
}