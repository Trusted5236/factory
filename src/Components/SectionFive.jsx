import profile from "../assets/assets/Ellipse-4 (1).png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";

export default function SectionFive() {
  const data = [
    {
      img: profile,
      note: "“Working with XFactory has been a game-changer for our supply chain. Their attention to detail, consistent quality, and on-time delivery have helped us scale production without a hitch. We finally found a partner we can rely on.”",
      testifier: "John Carter",
      position: "Businessman",
    },

    {
      img: profile,
      note: "“From our first order to our most recent bulk shipment, the experience has been seamless. The team at XFactory truly understands industrial manufacturing and goes the extra mile to meet our custom requirements.”",
      testifier: "John Carter",
      position: "Businessman",
    },
  ];

  return (
    <div className="w-full h-auto  px-[2rem] py-[3rem]">
      <div className="flex flex-col items-center text-center md:text-left gap-y-2 justify-start pb-[2rem]">
        <p className="text-orange-600 text-[1.3rem]">TESTIMONIALS</p>
        <h1 className="text-[3rem] font-bold">What Clients Say?</h1>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        navigation
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
           className="w-full h-auto relative"
      >


        {data.map((items, index) => (
          <SwiperSlide key={index} className="w-full h-auto">
            <div className="flex flex-col bg-black text-white items-center text-center px-[2rem] py-[2rem] -z-50 relative">
              <div className="relative">
                <img src={items.img} alt="profile" className="w-[7rem] rounded-full relative bottom-0"/>
              </div>

              <div className="flex flex-col gap-y-6">
                <p className="text-[1.1rem] md:text-[1.5rem] lg:text-[1.5rem]">{items.note}</p>
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
