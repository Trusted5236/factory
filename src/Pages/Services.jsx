import Used from "../Components/Usedbanner.jsx"
import ComponentS1 from "../Components/ComponentS1.jsx"
import ComponentS2 from "../Components/ComponentS2.jsx"
import ComponentS3 from "../Components/ComponentS3.jsx"
import SectionNine from "../Components/SectionNine.jsx"
import SectionEight from "../Components/SectionEight.jsx"
import SectionTen from "../Components/SectionTen.jsx"
import SectionEleven from "../Components/Sectionele.jsx"
export default function Services(){

    return(

        <div>
            <Used
            name={"Services"}
            subName={"Services"}
            />
            <ComponentS1/>
            <ComponentS2/>
            <ComponentS3/>
            <SectionEight/>
            <SectionNine/>
            <SectionTen/>
            <SectionEleven/>
        </div>
    )
}