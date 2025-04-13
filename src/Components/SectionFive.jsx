import profile from "../assets/assets/Ellipse-4 (1).png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";

export default function SectionFive() {
  const data = [
    {
      img: profile,
      note: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, minus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos natus obcaecati laboriosam magni doloremque. Eligendi?",
      testifier: "John Carter",
      position: "Businessman",
    },

    {
      img: profile,
      note: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, minus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos natus obcaecati laboriosam magni doloremque. Eligendi?",
      testifier: "John Carter",
      position: "Businessman",
    },
  ];

  return (
    <div className="w-full h-auto py-[6rem]">
      <div className="flex flex-col items-center gap-y-4 justify-start pb-[5rem]">
        <p className="text-orange-600 text-[1.3rem]">TESTIMONIALS</p>
        <h1 className="text-[3rem] font-bold">What Clients Say?</h1>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        spaceBetween={50}
        centeredSlides={true}
        navigation
        scrollbar={{draggable:true}}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="w-[70%] h-fit"
      >


        {data.map((items, index) => (
          <SwiperSlide key={index} className="w-full h-auto">
            <div className="flex flex-col bg-black text-white items-center text-center px-[4rem] relative">
              <div className="relative">
                <img src={items.img} alt="profile" className="w-[7rem] rounded-full relative bottom-[4.5rem]"/>
              </div>

              <div className="flex flex-col gap-y-6">
                <p className="text-[1.1rem]">{items.note}</p>
                <div>
                <h2 className="font-bold text-[1.4rem]">{items.testifier}</h2>
                <p className="text-[0.85rem] text-slate-400">{items.position}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
