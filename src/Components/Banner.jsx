import Marquee  from "react-fast-marquee"
export default function Banner(){

    return(
        <div className={`flex justify-between items-center bg-neutral-800 text-white w-[100%] px-4 flex-row py-3 z-30`}>
            <div><img src="https://public-assets.envato-static.com/assets/logos/envato_market-dd390ae860330996644c1c109912d2bf63885fc075b87215ace9b5b4bdc71cc8.svg" className={`w-[158px]`} alt="Banner Logo" /></div>

            <Marquee>
            <p className={`flex-wrap text-center`}>Limited time offer, BUY XTRA WordPress theme only <strong>$23</strong></p>
            </Marquee>

            <div><button className={`bg-yelloGreen p-2 hidden md:flex lg:flex text-sm text-black rounded-[0.5rem] shadow-sm shadow-yelloGreen`}>Download XTRA Theme</button></div>

        </div>
    )
}