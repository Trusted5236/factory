
import { useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { TbPlayerTrackNext } from "react-icons/tb";
import { IoPlayBackOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa6";
import Used from "../Components/Usedbanner";
import SectionEight from "../Components/SectionEight";
import SectionNine from "../Components/SectionNine";
import SectionTen from "../Components/SectionTen";
import SectionEleven from "../Components/Sectionele";
import { cart } from "../Components/Cartdata";
import { addProductToCart } from "../Components/Add";
import { useDispatch, useSelector } from "react-redux";

export default function Shop(){
    const dispatch = useDispatch()
    
    const [click, setClick] = useState(false)
    const [screen, setScreen] = useState(false)
    const [pageNumber, setPageNumber] = useState(0)
    const [indexNum, setIndex] = useState(null)


    useEffect(()=>{
        const handleScreen = ()=>{
            if(window.innerWidth > 768){
                setScreen(true)
            }else{
                setScreen(false)
            }
        }

        window.addEventListener("resize", handleScreen)
        handleScreen()
    }, [])

    const handleEnter =(index)=>{
        setIndex(index)
    }

    const handleLeave = ()=>{
        setIndex(null)
    }

     const handleClick =(product)=>{
        console.log(product)
        dispatch(addProductToCart(product))
        setClick(true)
     }

     const leaveClick =()=>{
        
        setClick(false)
     }



    const usersPerPage = 6
    const pageVisited = pageNumber * usersPerPage
    const displayUsers = cart.slice(pageVisited, pageVisited + usersPerPage).map((product, index)=>(
        
            <div className={screen ? `w-[22rem] h-auto border-[0.3rem] relative ${index === indexNum ? "transition-all duration-500 ease-in-out border-orange-600" : "border-black transition-all duration-500 ease-in-out"}` : `w-[18rem] h-auto border-[0.3rem] relative ${index === indexNum ? "transition-all duration-500 ease-in-out border-orange-600" : "border-black transition-all duration-500 ease-in-out"}`} onMouseEnter={()=>handleEnter(index)} onMouseLeave={handleLeave}>
            <div className="flex items-end justify-end px-[1.5rem] py-[1rem] text-orange-600 font-bold">${product.price}</div>
            <NavLink to={product.path}>
            <div><img src={product.image} className="w-[15rem]"/></div>

            <div>
                <h1 className={`text-white px-[1.5rem] py-[1.5rem] text-[0.9rem] font-bold ${index === indexNum ? "bg-orange-600 transition-all duration-500 ease-in-out" : "bg-black transition-all duration-500 ease-in-out"}`}>{product.title}</h1>
            </div>

        </NavLink>   

           {
            !click && index===indexNum ? <div onClick={()=>handleClick(product)} className={index === indexNum ? `${screen ? "w-fit flex text-white hover:bg-black cursor-pointer transition-all duration-500 ease-in-out items-center justify-center gap-x-2 p-2 bg-orange-600 absolute top-[15rem] left-[25%]" : "w-fit flex text-white hover:bg-black cursor-pointer transition-all duration-500 ease-in-out items-center justify-center gap-x-2 p-2 bg-orange-600 absolute top-[15rem] left-[25%]"}` : `hidden`}>
            <FaCartPlus /> <p>Add to Cart</p>
        </div>: 

            <NavLink to={"/cart"}>
                 <div onClick={leaveClick} className={index === indexNum ? `${screen ? "w-fit flex text-white hover:bg-black cursor-pointer transition-all duration-500 ease-in-out items-center justify-center gap-x-2 p-2 bg-orange-600 absolute top-[15rem] left-[25%]" : "w-fit flex text-white hover:bg-black cursor-pointer transition-all duration-500 ease-in-out items-center justify-center gap-x-2 p-2 bg-orange-600 absolute top-[15rem] left-[25%]"}` : `hidden`}>
                <FaCartPlus /> <p>View Cart</p>
                </div>
            </NavLink>
           }
            
        </div>
       

        
    ))

    const pageCount = Math.ceil(cart.length/ usersPerPage)
    const changePage = ({selected})=>{
        setPageNumber(selected)
    }



    return(
        <div className="w-full h-auto">
            <div>
                <Used
                name={"Shop"}
                subName={"Shop"}
                />
            </div>

            <div className={screen ? "w-full flex h-auto flex-wrap items-center justify-start gap-x-[4rem] gap-y-[4rem] p-[2rem] group" : "w-full flex h-auto flex-wrap items-center justify-center gap-x-[2rem] gap-y-[4rem] px-[1rem] py-[2rem] group"}>
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