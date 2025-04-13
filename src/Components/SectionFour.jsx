import img1 from "../assets/assets/pr1-300x225.jpg";
import img2 from "../assets/assets/pr2-300x225.jpg";
import img3 from "../assets/assets/pr3-300x225.jpg";
import img4 from "../assets/assets/pr5-300x225.jpg";
import img5 from "../assets/assets/pr6-300x225.jpg";
import img6 from "../assets/assets/pr8-300x225.jpg"
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function SectionFour() {
  const projects = [
    {
      firstImg: img1,
      title: "Factory is Safe & Secure",
      text: "Factory",
    },

    {
      firstImg: img2,
      title: "Petrochemical Industry",
      text: "Industrial",
    },

    {
      firstImg: img3,
      title: "Welding & Laser Cut",
      text: "Commercial",
    },

    {
      firstImg: img4,
      title: "Aircraft Jet Turbine",
      text: "Factory",
    },

    {
      firstImg: img5,
      title: "CNC Machinery",
      text: "Industrial",
    },

    {
      firstImg: img6,
      title: "Machinery & Gear",
      text: "Commercial",
    }
  ];

  const [largeScreen, setLargeScreen] = useState(true);

  useEffect(() => {
    const handleScreen = () => {
      setLargeScreen(window.innerWidth > 768);
    };

    handleScreen();

    window.addEventListener("resize", handleScreen);
  }, []);

  return (
    <div className={`${largeScreen ? "mt-[18rem]" : "mt-[80rem]"}`}>
      <div className={`${largeScreen ?  "flex flex-row items-center justify-between px-[3.5rem]" : "flex flex-col items-center text-center gap-y-4"}`}>
        <div>
          <p className="text-orange-600 text-[1.3rem]">LATEST PROJECTS</p>
          <h1 className="font-bold text-[3rem]">Featured Projects</h1>
        </div>

        <div>
          <button className="bg-orange-600 px-[2.5rem] py-[0.8rem] text-white">PROJECTS</button>
        </div>

        </div>

        <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={50}
        slidesPerView={`${largeScreen ? 4 : 2}`}
        Navigation
        pagination={{clickable:true}}
        onSlideChange={()=>console.log("slide change")}
        onSwiper={(swiper)=>console.log(swiper)}
        className="full"
        loop = {true}
        style={{
            "--swiper-navigation-color" : "red",
            "--swiper-pagination-color" : "red",
            "--swiper-pagination-bottom" : "0rem"

        }}
        
        >
            {projects.map((item, index)=>(
                <SwiperSlide key={index} className="flex justify-center items-center px-[0] py-[4rem] h-auto w-full">
                    <div className="w-full h-auto hover:bg-orange-600 bg-black text-white group transition-all duration-500 ease-in-out">
                        <div>
                            <img src={item.firstImg} alt="item-images" />
                        </div>

                        <div className="text-white px-[1.5rem] py-[2rem] w-full h-[100%]">
                            <h1 className="font-bold text-[1.2rem]">{item.title}</h1>
                            <p className="text-orange-600 group-hover:text-slate-200">{item.text}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
        
     
    </div>
  );
}
