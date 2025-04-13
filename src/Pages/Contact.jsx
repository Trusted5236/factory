import Used from "../Components/Usedbanner"
import ContactS1 from "../Components/ContactS1"
import MapComponent from "../Components/Google"
import ContactS2 from "../Components/ContactS2"
import SectionNine from "../Components/SectionNine.jsx"
import SectionEight from "../Components/SectionEight.jsx"
import SectionTen from "../Components/SectionTen.jsx"
import SectionEleven from "../Components/Sectionele.jsx"
export default function Contact(){

    return(
        <div>
            <div>
                <Used
                name={"Contact"}
                subName={"Contact"}
                />

            </div>
            <ContactS1/>
            <div className="px-[2rem]">
            <MapComponent/>
            </div>
            <ContactS2/>
            <SectionEight/>
            <SectionNine/>
            <SectionTen/>
            <SectionEleven/>
        </div>
    )
}