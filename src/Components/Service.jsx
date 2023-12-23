import card1 from "../Images/card1.png";
import card2 from "../Images/card2.png";
import card3 from "../Images/card3.png";
import trade1 from "../Images/trade1.png";
import trade2 from "../Images/trade2.png";
import checkbox from "../Images/checkbox.png";
import ServiceCards from "./ServiceCards";

const Service = () => {
  return (
    <div className="py-6">
        <div className="text-center flex flex-col gap-4 py-6">
            <h1 className="font-[400] text-xl text-slate-300">Our Services</h1>
            <h2 className="font-[400] text-5xl text-black">Handshake infographic mass market <br /> crowdfunding iteration.</h2>
        </div>
        <div className="flex w-[90%] mx-auto justify-between">
            <ServiceCards img={card1} h1text="Cool feature title" />
            <ServiceCards img={card2} h1text="Even cooler feature" />
            <ServiceCards img={card3} h1text="Cool feature title" />
        </div>
        <div className="flex w-[90%] mx-auto justify-between items-center my-40">
            <div ><img src={trade1} /></div>
            <div className="flex flex-col  w-[40%] ">
                <h1 className="font-[400] text-4xl text-black">We connect our customers <br /> with the best, and help them <br /> keep up-and stay open.</h1>
                <div className="flex items-center gap-5 pt-10">
                    <img src={checkbox} />
                    <h1 className="font-[400] text-xl text-black">We connect our customers with the best.</h1>
                </div>
                <div className="flex items-center gap-5 py-5">
                    <img src={checkbox} />
                    <h1 className="font-[400] text-xl text-black">Advisor success customer launch party.</h1>
                </div>
                <div className="flex items-center gap-5 pb-10">
                    <img src={checkbox} />
                    <h1 className="font-[400] text-xl text-black">Business-to-consumer long tail.</h1>
                </div>
                <button className="w-[210px] h-[60px] bg-[#0A2640] rounded-[56px]  text-white font-[700]">Start Now</button>
            </div>
        </div>

        <div className="flex w-[90%] mx-auto justify-between items-center my-40">
            
            <div className="flex flex-col  w-[40%] ">
                <h1 className="font-[400] text-4xl text-black">We connect our customers <br /> with the best, and help them <br /> keep up-and stay open.</h1>
                <div className="w-[500px] h-[68px] rounded-sm flex items-center gap-5 mt-10 bg-[#0A2640]">
                    <img src={checkbox} />
                    <h1 className="font-[400] text-xl text-white">We connect our customers with the best.</h1>
                </div>
                <div className="w-[500px] h-[68px] flex items-center gap-5 my-5">
                    <img src={checkbox} />
                    <h1 className="font-[400] text-xl text-black">Advisor success customer launch party.</h1>
                </div>
                <div className="w-[500px] h-[68px] flex items-center gap-5 pb-10">
                    <img src={checkbox} />
                    <h1 className="font-[400] text-xl text-black">Business-to-consumer long tail.</h1>
                </div>
            </div>
            <div ><img src={trade2} /></div>
        </div>
    </div>
  )
}

export default Service
