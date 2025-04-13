import img1 from "../assets/assets/pr1-300x225.jpg";
import img2 from "../assets/assets/pr2-300x225.jpg";
import img3 from "../assets/assets/pr3-300x225.jpg";
import img4 from "../assets/assets/pr5-300x225.jpg";
import img5 from "../assets/assets/pr6-300x225.jpg";
import img6 from "../assets/assets/pr8-300x225.jpg"
import img7 from "../assets/assets/pr4.jpg"
import img8 from "../assets/assets/pr7.jpg"
import SectionEight from "../Components/SectionEight.jsx";
import SectionNine from "../Components/SectionNine.jsx";
import SectionTen from "../Components/SectionTen.jsx";
import SectionEleven from "../Components/Sectionele.jsx";
import { MdArrowForward } from "react-icons/md";
import { useEffect, useState } from "react";
import { TbPlayerTrackNext } from "react-icons/tb";
import { IoPlayBackOutline } from "react-icons/io5";
import Used from "../Components/Usedbanner.jsx";
import ReactPaginate from "react-paginate"
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
export default function Projects(){
    const info = [
        {
            id: 1,
            image: img1,
            title: "Factory is Safe & Secure",
            path: "factory"
        },

        {
            id: 2,
            image: img2,
            title: "Machinery & Gear",
            path: "gear"
        },

        {
            id: 3,
            image: img3,
            title: "Aircraft Jet Turbine",
            path: "aircraft"
        },

        {
            id: 4,
            image: img7,
            title: "Car Assembly line",
            path: "car"
        },

        {
            id: 5,
            image: img5,
            title: "CNC Machinery",
            path: "machinery"
        },

        {
            id: 6,
            image: img6,
            title: "Petrochemical Industry",
            path: "petrochemical"
        },

        {
            id: 7,
            image: img4,
            title: "Welding & Laser Cut",
            path: "weilding"
        },
        
        {
            id: 8,
            image: img8,
            title: "Laser cut machines",
            path: "laser"
        },
    ]

    const navigate = useNavigate("project")

    const [pageNumber, setPageNumber] = useState(0)

    const [screen, setScreen] = useState(false)

    useEffect(()=>{
        const handleScreen =()=>{
            if(window.innerWidth > 768){
                setScreen(true)
            }else{
                setScreen(false)
            }
        }

        window.addEventListener("resize", handleScreen)
        handleScreen()
    }, [])
  
    const usersPerPage = 6
    const pageVisited = pageNumber * usersPerPage
    const displayUsers = info.slice(pageVisited, pageVisited + usersPerPage).map((user, index)=>(
        <div className={screen ? "flex flex-col w-fit relative group" : "flex flex-col w-full relative group px-[2rem]"}>
            <NavLink to={user.path}>
            <div><img src={user.image} className={screen ? "w-[23rem] group-hover:brightness-50 transition-all duration-500 ease-in-out" : "w-full group-hover:brightness-50 transition-all duration-500 ease-in-out"}/></div>
            <h1 className="bg-black text-white text-[1.3rem] font-bold px-[2rem] py-[2rem] group-hover:bg-orange-600 transition-all duration-500 ease-in-out">{user.title}</h1>
            <MdArrowForward className={screen ? "absolute bottom-[12rem] left-[8.5rem] text-white bg-orange-600 text-[2rem] p-2 w-[4rem] font-bold h-[3rem] hidden group-hover:flex transition-all duration-500 ease-in-out" : "absolute bottom-[15rem] left-[12rem] text-white bg-orange-600 text-[2rem] p-2 w-[4rem] font-bold h-[3rem] hidden group-hover:flex transition-all duration-500 ease-in-out"}/>
            </NavLink>
        </div>
    ))

    const pageCount = Math.ceil(info.length/ usersPerPage)
    const changePage = ({selected})=>{
        setPageNumber(selected)
        navigate()
    }

    return(
        <div className={screen ? "" : ""}>
            <Used
            name={"Projects"}
            subName={"Projects"}
            />

           <div  className={screen ? "w-full flex flex-row flex-wrap items-center justify-start gap-x-10 px-[2rem] py-[5rem] gap-y-[2.5rem]" : "w-full flex flex-col items-center gap-y-[2.5rem] justify-start py-[5rem]"}>
           {displayUsers}
           </div>

            <ReactPaginate
            previousLabel={pageNumber > 0 ? <IoPlayBackOutline /> : ""}
            nextLabel={pageNumber < pageCount - 1 ? <TbPlayerTrackNext /> : ""}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName="w-full h-auto flex flex-row items-center justify-center gap-x-[1rem] mb-[6rem]"
            nextClassName={pageNumber < pageCount -1 ? "bg-black text-white px-[1.5rem] py-[0.8rem] hover:bg-orange-600 transition-all duration-500 ease-in-out" : ""}
            pageClassName="bg-black text-white px-[1.5rem] py-[0.5rem] hover:bg-orange-600 transition-all duration-500 ease-in-out"
            previousClassName={pageNumber > 0 ? "bg-black text-white px-[1.5rem] py-[0.8rem] hover:bg-orange-600 transition-all duration-500 ease-in-out" : ""}
            activeClassName="bg-orange-600 transition-all duration-500 ease-in-out"
            />   

            <SectionEight/>
            <SectionNine/>
            <SectionTen/>
            <SectionEleven/>
        </div>
    )
}