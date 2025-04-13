import { IoIosArrowDown } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { FaGreaterThan } from "react-icons/fa6";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false)
  const [action, setAction] = useState(false)
  const [dropDown2, setDropDown2] = useState(false)
  const [action2, setAction2] = useState(false)


  useEffect(()=>{
    if(isOpen){
        document.body.style.overflow = "hidden"
    }else{
        document.body.style.overflow = "auto"
    }
  })

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

  }, []);

  const handleEnter = ()=>{
   setDropDown(true)
  }

  const handleLeave = ()=>{
    setDropDown(false)
  }

  const handleAction = ()=>{
    if(action){
      setAction(false)
    }else{
      setAction(true)
    }
  }

  const handleAction2 =()=>{
    if(action2){
      setAction2(false)
    }else{
      setAction2(true)
    }
  }

  const handleNavLink =()=>{
    setDropDown(false)
    setDropDown2(false)
    setIsOpen(false)
  }

  return (
    <div className="w-[100%] flex items-center justify-between bg-neutral-900 text-white font-bold flex-row h-[5rem] sticky top-[4rem] z-30">
      <div>
        <img src="../logo.png" alt="logo" className="h-auto w-[13rem]" />
      </div>

      <div>
        <ul className="hidden md:flex flex-row gap-x-6 items-center">
          <NavLink to={"/"} className={({isActive})=>`${isActive ? "text-orange-600" : ""}`}>
            <li>HOME</li>
          </NavLink>
          <NavLink to={"about"} className={({isActive})=>`${isActive ? "text-orange-600" : ""}`}>
            <li>ABOUT</li>
          </NavLink>
          <NavLink to={"services"} className={({isActive})=>`${isActive ? "text-orange-600" : ""}`}>
            <li>SERVICES</li>
          </NavLink>
          <NavLink to={"projects"} className={({isActive})=>`${isActive ? "text-orange-600" : ""}`}>
            <li className="flex flex-row items-center">
              PROJECTS
            </li>
          </NavLink>


          <div onMouseEnter={handleEnter} onMouseLeave={handleLeave} className= "">
            <li className={`flex flex-row items-center group ${dropDown ? "text-orange-600  transition-all duration-500 ease-in-out" : "text-white  transition-all duration-500 ease-in-out"}`}>
              PAGES <IoIosArrowDown />
            </li>

          {dropDown && <div className={`w-[10rem] left-[43rem] top-[3.3rem] absolute bg-neutral-900 z-50 font-thin`}>
                  <ul className="w-full flex flex-col">
                    <NavLink to={"blog"} onClick={()=>handleNavLink()} className={({isActive})=>`hover:border-l-4 border-orange-600 px-[1rem] transition-all duration-200 ease-in-out text-[0.85rem] pt-[1.5rem] pb-[0.5rem] ${isActive ? "text-orange-600" : ""}`}><li>BLOG</li></NavLink>

                    <NavLink to={"faq"} onClick={()=>handleNavLink()} className={'hover:border-l-4 border-orange-600 px-[1rem] transition-all duration-200 ease-in-out text-[0.85rem] py-[0.5rem]'}><li>FAQ'S</li></NavLink>

                    <div className={'hover:border-l-4 border-orange-600 px-[1rem] transition-all duration-200 ease-in-out text-[0.85rem] pt-[0.5rem] pb-[1.5rem]'} onMouseEnter={()=>setDropDown2(true)} onMouseLeave={()=>setDropDown2(false)}>
                    <NavLink to={"shop"}  onClick={()=>handleNavLink()}><li className="flex items-center justify-between" >SHOP <FaGreaterThan /></li>
                    </NavLink>
                    {dropDown2 && (
                      <div className={`w-[10rem] left-[10rem] absolute bg-neutral-900 text-white top-[6rem]`}>
                       <ul className="flex flex-col gap-y-2 py-[0.5rem]  text-[1rem]">
                        <NavLink to={"shop"} onClick={()=>handleNavLink()} className={'hover:border-l-4 border-orange-600 px-[1.5rem] transition-all duration-500 ease-in-out'}>
                          <li>All Products</li>
                        </NavLink>

                        <NavLink to={"account"} onClick={()=>handleNavLink()} className={'hover:border-l-4 border-orange-600 px-[1.5rem] transition-all duration-500 ease-in-out'}>
                          <li>My Account</li>
                        </NavLink>

                        <NavLink to={"Cart"} onClick={()=>handleNavLink()} className={'hover:border-l-4 border-orange-600 px-[1.5rem] transition-all duration-500 ease-in-out'}>
                          <li>Cart</li>
                        </NavLink>

                        <NavLink onClick={()=>handleNavLink()} className={'hover:border-l-4 border-orange-600 px-[1.5rem] transition-all duration-500 ease-in-out'}>
                          <li>Checkout</li>
                        </NavLink>

                       </ul>
                      </div>
                    )}
                    </div>
                    
                  </ul>
              </div>}
          </div>


          <NavLink to={"contact"} className={({isActive})=>`${isActive ? "text-orange-600" : ""}`}>
            <li>CONTACT</li>
          </NavLink>
        </ul>
      </div>

      <div className="hidden md:flex flex-row gap-x-6 items-center py-[1.5rem]">
        <button className="bg-orange-600 px-4 font- py-[1.6rem]">
          GET FREE QUOTE
        </button>
        <div className="flex flex-row gap-x-6">
          <FaFacebookSquare />
          <FaXTwitter />
          <FaSquareInstagram />
        </div>
      </div>

      <div className="md:hidden px-6">
        {isOpen ? (
          <IoClose
            className="absolute left-[14rem] top-5 text-4xl hover:animate-spinOnce z-30"
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <IoMenu
            className="text-4xl bg-orange-600 p-2"
            onClick={() => setIsOpen(true)}
          />
        )}
      </div>



      {isOpen && (
        <div className="bg-neutral-900/50 w-full h-auto absolute top-0 left-0 right-0 bottom-0">

          <div
            className={`absolute top-0 right-0 z-30 w-[60%] bg-neutral-900 h-[100vh] transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out`}
          >
            <ul className="px-6 py-6 flex flex-col gap-y-5 ">
              <NavLink to={"/"} onClick={()=>handleNavLink()}>
                <li className="hover:text-orange-600 border-b border-gray-400">
                  HOME
                </li>
              </NavLink>

              <NavLink to={"about"} onClick={()=>handleNavLink()} >
                <li className="hover:text-orange-600 border-b border-gray-400">
                  ABOUT
                </li>
              </NavLink>

              <NavLink to={"services"} onClick={()=>handleNavLink()}>
                <li className="hover:text-orange-600 border-b border-gray-400">
                  SERVICES
                </li>
              </NavLink>

              <NavLink to={"projects"} onClick={()=>handleNavLink()}>
                <li className="hover:text-orange-600 flex flex-row items-center border-b border-gray-400 justify-between">
                  PROJECTS
                </li>
              </NavLink>

              <div onClick={handleAction}>
              <li className="hover:text-orange-600 flex flex-row items-center border-b border-gray-400 justify-between">
                  PAGES <IoIosArrowDown />
                </li>

                {action && <div className="w-full h-auto ">
                  
                  <ul className="w-full flex flex-col">
                    <NavLink to={"blog"} className={'border-l-4 border-gray-400 px-[1rem] border-b py-[0.5rem] hover:text-orange-600 transition-all duration-500 ease-in-out'}><li>BLOG</li></NavLink>

                    <NavLink to={"faq"} className={'border-l-4 border-gray-400 px-[1rem] border-b py-[0.5rem] hover:text-orange-600 transition-all duration-500 ease-in-out'}><li>FAQ'S</li></NavLink>

                   <div className="w-full flex flex-col">
                   <NavLink to={"shop"} className={'border-l-4 border-gray-400 px-[1rem] border-b py-[0.5rem] hover:text-orange-600 transition-all duration-500 ease-in-out'}><li className="flex items-center justify-between">SHOP <IoIosArrowDown /></li></NavLink>
                    
                    {action2 && <div>
                      
                    </div>}

                   </div>
                  </ul>
                
                </div>}
              </div>

              <NavLink to={"contact"} onClick={()=>handleNavLink()}>
                <li className="hover:text-orange-600 border-b border-gray-400">
                  CONTACT
                </li>
              </NavLink>

              <NavLink to={"x"}>
                <li className="hover:text-orange-600 border-b border-gray-400">
                  Buy XTRA Theme
                </li>
              </NavLink>
            </ul>

            <div className="absolute bottom-0 flex flex-col justify-center items-center gap-y-6 py-6 left-[25%]">
              <div className="flex flex-row gap-x-6 items-center justify-center">
                <FaFacebookSquare className="text-3xl" />
                <FaXTwitter className="text-3xl" />
                <FaSquareInstagram className="text-3xl" />
              </div>

              <div className="flex flex-row gap-x-6 items-center justify-center">
                <p className="text-sm font-normal text-gray-400">
                  © 2024 All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    
    </div>
  );
}
