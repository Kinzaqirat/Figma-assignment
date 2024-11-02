import Image from "next/image";

import house from "../../photos/house.png"
import button from "../../photos/button.png"
import house2 from "../../photos/house2.png"
import house3 from "../../photos/house3.png"
import house4 from "../../photos/Rectangle 9.png"
import bg from "../../photos/Rectangle 17 (1).png"
import house5 from "../../photos/image 15.png"
import house6 from "../../photos/image 16.png"
import house7 from "../../photos/image 17.png"
import house8 from "../../photos/image 18.png"
import contact from "../../photos/image 12.png"

export default function Home() {
  return (
  <div>

<div className="flex justify-center gap-[100px] max-sm:gap-1 max-sm:w-[600px]">
        <div className="">
          <p className="w-[277.76px] h-[64px] text-[#808080] text-[60px] font-light  mt-[200px] max-sm:text-[50px] max-sm:ml-[20px] max-sm:w-[100px] max-sm:h-[60px]">
            PROJECT
          </p>
   
          <p className="text-[60px] w-[168px] h-[64px]  max-sm:w-[100px] max-sm:text-[50px] max-sm:m-4 ">
            <strong>Lourm</strong>
          </p>
        </div>
        <div className="relative max-sm:w-[640px] max-sm:ml-[90px] ">
          <Image src={house} alt={""} className="w-[770px] h-[829px] max-sm:mt-[90px] max-sm:w-[940px] max-sm:h-[900px] "></Image>
          
      
          <Image src={button} alt="" className="absolute bottom-0"></Image>
        </div>
</div>


















<br />


<br />
<br />
<br />










<div className="w-[1170px] h-[465px] bg-[#E8E8E8] ml-[100px] max-sm:ml-[50px] max-sm:w-[500px] max-sm:h-[700px]  ">
        <div className="">
          <Image
            className="w-[280px] h-[265px] pt-6 pl-20 max-sm:w-[200px] max-sm:h-[200px]"
            src={house2}
            alt=""
          ></Image>
        </div>

        <div>
          <Image
            className="w-[280px] h-[140px] pt-6 pl-20"
            src={house3}
            alt=""
          ></Image>
        </div>
        <div className="relative">
          <Image
            className="w-[280px] h-[345px] absolute bottom-10 left-[340px] max-sm:w-[200px] max-sm:h-[200px] max-sm:bottom-[-1px] max-sm:left-[300px]"
            src={house4} 
            alt=""
          ></Image>
          <div>
          <h1
            className="absolute bottom-[320px] left-[700px] text-[30px] font-thin w-[168px] h-[64px] max-sm:left-[140px] max-sm:top-[10px]"
            style={{ fontFamily: "Raleway" }}
          >
            About
            <br />
          </h1>

          <p className="absolute bottom-[100px] text-[15px] left-[700px] max-sm:inline max-sm:top-9 max-sm:text-left max-sm:left-[100px] max-sm:right-9 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.

            Eos vitae culpa quo nostrum animi ea tempora pariatur quisquam nemo
            optio suscipit, omnis recusandae doloribus

            quidem aliquam delectus quae, reprehenderit obcaecati! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Maiores, ab
            reprehenderit. Asperiores

            maxime necessitatibus optio iusto hic neque expedita in libero non
            reprehenderit voluptatum,
    
            accusantium at eum excepturi cumque eveniet!
          </p>
          </div> 
          <Image
            src={button}
            alt=""
            className="absolute bottom-0 left-[640px] max-sm:left-[300px] max-sm:absolute max-sm:top-[290px]"
          ></Image>
        </div>
        </div>





<br />
<br />
<br />
<br />
<br />


<div style={{ fontFamily:"Raleway "}} className="flex justify-center text-[60px] font-thin text-[#E8E8E8] max-sm:text-[40px] max-sm:pl-[200px]">Main Focus/Mission Statement</div>


<div className="flex justify-center gap-3  max-sm:pl-[200px]">

  <p className=" text-[#E8E8E8] text-[90px] ">1</p>
<div style={{ fontFamily:"Raleway "}} className="mt-10 max-sm:text-[15px]">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
  <br />
   placeat necessitatibus! At officiis culpa quasi totam est 
<br />
   tempora optio sequi sunt? Consequatur quo quis minus, 
<br />
   obcaecati culpa iure veniam eaque!


</div>


<div className="flex justify-start ">
  <p className=" text-[#E8E8E8] text-[90px] ">2</p>
<div style={{ fontFamily:"Raleway "}} className="mt-10 max-sm:text-[15px]">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
  <br />
   placeat necessitatibus! At officiis culpa quasi totam est 
   <br />
   tempora optio sequi sunt? Consequatur quo quis minus, 
   <br />
   obcaecati culpa iure veniam eaque!


</div>
</div>
</div>

<br />
<br />
<br />
<br />
<br />
<br />

<div className="w-[1170px] h-[286px] max-sm:h-[400px] max-sm:w-[400px] ">
<h1 style={{ fontFamily:"Raleway "}} className="text-[#808080] text-[100px] font-thin pl-[200px] max-sm:pl-[100px] max-sm:text-[50px]"> Our Projects</h1>

<br />
<div className="flex justify-between relative ml-[130px] gap-20 max-sm:ml-[30px] max-sm:gap-5">
<Image src={bg} alt="" className="w-[570px] h-[255px] max-sm:w-[300px] max-sm:h-[250px]"></Image>
<h1 className="absolute text-white text-[50px] bottom-10 left-14">Sample projects 
<br />
  <button className="text-white text-[20px] font-thin ">Read more</button>

</h1>

<Image src={house5} alt="" className="w-[570px] h-[255px] max-sm:w-[270px]"></Image>
 
</div>

<br />
<div className=" flex justify-evenly gap-10 ml-[130px] max-sm:ml-[40px] max-sm:gap-3 ">
  <Image src={house6} alt="" className="w-[270px] h-[255px] max-sm:h-[190px] max-sm:w-[190px]"></Image>
  <Image src={house7} alt="" className="w-[470px] h-[255px] max-sm:h-[190px] max-sm:w-[190px]"></Image>
  <Image src={house8} alt="" className="w-[370px] h-[255px] max-sm:h-[190px] max-sm:w-[190px]"></Image>

</div>

<br />
<button className="bg-slate-600 font-thin text-white w-[221.81px] h-[71px] text-[20px] ml-[1050px] max-sm:ml-[400px] ">All Projects</button>
<br />
<br />

<br />
 


{/* <br />
<br />
<br />
<br />


<br />
<br /><br />

<br />
<br />
<br />
 */}


  </div>

<br />
<br />
<br />


<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />


<h1 style={{ fontFamily:"Raleway "}} className="text-[40px] pl-[100px] text-[#808080]">Contact us</h1>
<br />
<br />
<br />

<div className="flex justify-center gap-[50px] max-sm:gap-10 max-sm:w-[500px] max-sm:pl-[40px]">

  <form action=" " >
    <input className="bg-slate-200 w-[391px] h-[46px] text-center max-sm:w-[200px]" type="text" placeholder="Name" />

    <br />
    <br />
    <input className="bg-slate-200 w-[391px] h-[46px] text-center max-sm:w-[200px]" type="text" placeholder="E-mai;" />
<br />
    <br />
    <input className="bg-slate-200 w-[391px] h-[46px] text-center max-sm:w-[200px]" type="text" placeholder="Phone Number " />
    <br />
    <br />
    <input className="bg-slate-200 w-[391px] h-[46px] text-center max-sm:w-[200px]" type="text" placeholder="Interested in" />
    <br />
    <br />
    <input className="bg-slate-200 w-[391px] h-[147px] text-center max-sm:w-[200px]" type="text" placeholder="Message" />
  </form>

<div>
<Image src={contact} alt="" className="w-[749px] h-[369px] max-sm:w-[300px] max-sm:h-[430px] "></Image>
</div>


</div>
<br />
<br />
<br />
<div className="pl-[70px] max-sm:pl-[40px] ">
<button style={{ fontFamily:"Raleway "}} className="text-white bg-slate-600 w-[221.81px] h-[71px] max-sm:h-[50px] ">Send E-mail</button>
</div>
<br />
<br />
<br />
<br />

  </div>
  );
}
