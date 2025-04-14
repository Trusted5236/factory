import Faqs from "../Components/Faqs.jsx"
import Used from "../Components/Usedbanner"
import SectionNine from "../Components/SectionNine.jsx"
import SectionEight from "../Components/SectionEight.jsx"
import SectionTen from "../Components/SectionTen.jsx"
import SectionEleven from "../Components/Sectionele.jsx"
export default function FAQ(){

    return(
        <div>
            <Used
            name={"Frequently Asked Questions"}
            subName={"Frequently Asked Questions"}
            />
            <Faqs/>
            <SectionEight/>
            <SectionNine/>
            <SectionTen/>
            <SectionEleven/>
        </div>
    )
}