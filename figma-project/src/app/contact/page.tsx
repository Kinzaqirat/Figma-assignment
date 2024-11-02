import Link from "next/link"
import Image from "next/image"
import contact from "../../../photos/image 14 (1).png"
export default function Contact (){
    return(
        <div>
<div className="flex justify-evenly max-sm:flex max-sm:justify-center max-sm:w-[400px] max-sm:gap-3">
    <div>
    <h1 style={{ fontFamily:"Raleway"}} className="text-[#808080] text-[50px] font-thin max-sm:text-[20px] max-sm:pt-6">Contact</h1>

    
<h1 style={{ fontFamily:"Raleway"}} className="text-[50px] max-sm:text-[20px] "> <strong>Information</strong></h1>
<br />

<p style={{ fontFamily:"Raleway"}} className="text-[15px] max-sm:text-[10px]">
    <strong>Comapny name</strong>
    <br />
    123 Sample Street
</p>
<br />
<br />
<p style={{ fontFamily:"Raleway"}} className="font-semibold max-sm:text-[10px]">
512.333.2222
</p>
<br />

<p className="text-[#808080] max-sm:text-[10px] " style={{ fontFamily:"Raleway"}}>
    sampleemail@gmail.com
</p>
<br />
<button style={{ fontFamily:"Raleway"}} className="w-[221.81px] h-[71px] bg-slate-900 text-white max-sm:text-[10px] max-sm:w-[100px]">CONTACT US</button>
    </div>
   
<Image src={contact} alt="" className="h-[501px] w-[600px]  max-sm:w-[200px]"></Image>
</div>
<br />
<br />



        </div>
    )
}