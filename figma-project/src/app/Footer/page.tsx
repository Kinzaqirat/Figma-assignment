import Image from "next/image"
import logo from "../../../photos/logo.png"
import address from "../../../photos/address.png"
import telephone from "../../../photos/telephone.png"
import facebook from "../../../photos/faceBook.jpg"
import twitter from "../../../photos/twitter.png"
import linkedin from "../../../photos/linkedin.png"
import pin from "../../../photos/pint.jpg"
import Link from "next/link"
export default function Footer(){
    return(
<footer className="w-[100%] h-[417px] bg-[#2C2C2C] max-sm:[30px] max-sm:h-[400px] max-sm:w-[640px]">
<div className=" flex justify-evenly  ">

<Image src={logo} alt="" className="w-[145px] h-[94px] mt-[80px]  ">
</Image>
<ul style={{ fontFamily:"Raleway"}} className="text-white mt-[80px] text-[13px]  ">
    <li>Information</li>

    <br />
    <br />
 <Link href={"/"}>   <li>Main</li></Link>
    <br />
    <li>Gallery</li>
    <br />
    <li>Projects</li>
    <br />
<Link href={"/certification"}>    <li>Certificatons</li></Link>
    <br />
   <Link href={"/contact"}> <li>Contacts</li></Link>
</ul>


<ul style={{ fontFamily:"Raleway"}}
className="text-white mt-[80px] text-[13px]">
<li>
   Contact
</li>
<br />
<br />

<li className="flex justify-center gap-3"> <Image src={address} alt="" className="w-[20px] h-[20px] "></Image>
<p style={{ fontFamily:"Raleway"}} className="text-white text-[10px]">1234 Sample Street 
    <br />
    Austin Texes 78704
</p>
</li>

<br />
<li style={{ fontFamily:"Raleway"}}  className="flex justify-center gap-3">
<Image src={telephone} alt="" className="w-[20px] h-[20px] "></Image>
123.456.898
</li>
<br />
<li style={{ fontFamily:"Raleway"}} className="">
    📧  sampleemail@gmail.com
    </li></ul>
   


   <ul style={{ fontFamily:"Raleway"}} 
   className="text-white mt-[80px] text-[13px] ">
    <li>Social media</li>
    <br />
    <br />
    <li className="flex justify-center gap-4">
        <Image src={facebook} alt="" className="w-[20px] h-[20px]"></Image>
        <Image src={twitter} alt="" className="w-[20px] h-[20px]"></Image>
        <Image src={linkedin} alt="" className="w-[20px] h-[20px]"></Image>
        <Image src={pin} alt="" className="w-[20px] h-[20px]"></Image>
    </li>
   </ul>
    

 
</div>

<br />
<br />
<hr />


<div style={{ fontFamily:"Raleway"}} className="flex justify-center text-white">
© 2021 All rights are reserved
</div>
</footer>
    )
}