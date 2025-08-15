import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";



export default function Footer()
{
    return(
     <>
     <div className="flex mt-5 justify-center p-2 ">
        <p>Saif ur Rehman © 2024</p>
        {/* Logo here */}
        <div className="flex ">
            <FaGithub />
            <FaLinkedin />
            <MdOutlineEmail />
        </div>
     </div>
     </>
    )
}