import Image from "next/image"
import logo from "../../../photos/Group 8.jpg"
import Link from "next/link"
export default function Header(){
    return(

      
<div className="w-[1440px]  h-[102px] p-2 max-sm:w-[100px] ">

<div className="flex items-center max-sm:gap-[6px] ">
<div>
<Image src={logo} alt="" className="w-[70px] h-[43.71px] mt-4 ml-[100px] max-sm:ml-3">
</Image>
<h1 style={{ fontFamily:"Raleway"}} className=" text-center ml-20 max-sm:ml-3"><strong className="font-semibold text-[13px]">DIGITAL PROJECT</strong></h1>
</div>


<ul className="ml-[300px] flex justify-center gap-4  max-sm:ml-[20px] max-sm:gap-[20px]    ">
   <Link href="/">     <li style={{ fontFamily:"Raleway"}} className="underline w-[68px] h-[0.97px] mb-4 text-[13px] max-sm:text-[15px]  
        "><span className="overline">Main</span> </li></Link>

        
        <li style={{ fontFamily:"Raleway"}} className="w-[65px] h-[12px] text-[13px] max-sm:text-[15px]  "> GALLERY</li>

   
        <li  style={{ fontFamily:"Raleway"}}className="w-[76px] h-[11px] text-[13px] max-sm:text-[15px] ">PROJECTS</li>
   <Link href="/certification">
   <li  style={{ fontFamily:"Raleway"}}className="w-[123px] h-[11px] text-[13px] max-sm:text-[15px]  ">CERTIFICATIONS</li></Link>
<Link href="/contact">
<li style={{ fontFamily:"Raleway"}} className="w-[79vpx] h-[11.66px] text-[13px] max-sm:text-[15px]   ">CONTACT</li></Link>
    </ul>
</div>


</div>

  
    )
}