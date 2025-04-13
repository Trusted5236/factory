import Used from "../Components/Usedbanner.jsx"
import ComponentA1 from "../Components/ComponentA1.jsx"
import ComponentA2 from "../Components/ComponentA2.jsx"
import SectionFive from "../Components/SectionFive.jsx"
import ComponentA3 from "../Components/ComponentA3.jsx"
import ComponentA4 from "../Components/ComponentA4.jsx"
import ComponentA5 from "../Components/ComponentA5.jsx"
import SectionNine from "../Components/SectionNine.jsx"
import SectionEight from "../Components/SectionEight.jsx"
import SectionTen from "../Components/SectionTen.jsx"
import SectionEleven from "../Components/Sectionele.jsx"
export default function About(){

    return(
        <div>
            <Used
            name={"About Us"}
            subName={"About Us"}
            />

            <ComponentA1/>
            <ComponentA2/>
            <SectionFive/>
            <ComponentA3/>
            <ComponentA4/>
            <ComponentA5/>
            <SectionEight/>
            <SectionNine/>
            <SectionTen/>
            <SectionEleven/>
        </div>
    )
}