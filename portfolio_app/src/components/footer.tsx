"use client"

import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { NavbarLogo } from "@/components/ui/navBar";
import { useState } from "react";


export default function Footer()
{
    const [ showDialog,setShowDialog ] = useState(false)
    return(

     <>
     <div className="flex flex-col mt-5 items-center p-2 ">
        <p>Saif ur Rehman © 2024</p>
        {/* Logo here */}
        <div 
        className="m-2 relative flex-row justify-center gap-3  inline-block"
        onMouseEnter={()=> setShowDialog(true)}
        onMouseLeave={()=> setShowDialog(false)}

        >
        <div 
        className="cursor-pointer"
        onClick={()=> window.scrollTo({top : 0 , behavior : "smooth"})}
        >

        <NavbarLogo  />
        {/* Alert dialog style */}
        {showDialog && (
  <span className="
    absolute
    left-1/2
    -translate-x-1/2
    top-full
    mt-2
    bg-gray-900
    text-white
    p-2
    rounded-lg
    shadow-lg
    z-10
    whitespace-nowrap
  ">
    To Top
  </span>
)}
        </div>
        </div>
        
        
        <div className="flex gap-6 p-2  ">
            <FaGithub />
            <FaLinkedin />
            <MdOutlineEmail />
        </div>
     </div>
     </>
    )
}

//  Let's complete the footer tomorrow 