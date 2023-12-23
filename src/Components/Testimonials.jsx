import qiz from "../Images/qiz.png";
import left from "../Images/left.png";
import right from "../Images/right.png";

const Testimonials = () => {
  return (
    <div className="bg-[#0A2640] flex flex-col py-10">
        <div className="flex py-10 w-[90%] mx-auto justify-between">
            <h1 className="font-[400] text-5xl text-white">An enterprise template to ramp <br /> up your company website</h1>
            <div className="flex self-end gap-7">
                <img className="w-[72px] h-[72px]" src={right} />
                <img className="w-[72px] h-[72px]" src={left} />
            </div>
        </div>
        <div className="flex justify-between w-[90%] mx-auto pt-20">
            <div className="w-[350px] h-[322px] flex flex-col justify-between p-10 bg-white rounded-[12px]">
                <h1 className="font-[400] text-2xl text-black pb-10">“Buyer buzz partner network disruptive non-disclosure agreement business”</h1>
                <div className="flex gap-2">
                    <img src={qiz}  />
                    <h2 className="text-base font-[700] text-[#0A2640]">Albus Dumbledore <br /> <span className="text-base font-[400] text-[#0A2640]"> Manager @ Howarts</span></h2>
                </div>
            </div>
            <div className="w-[350px] h-[394px] flex flex-col justify-between p-10  bg-white rounded-[12px]">
                <h1 className="font-[400] text-2xl text-black pb-10">“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”</h1>
                <div className="flex gap-2">
                    <img src={qiz}  />
                    <h2 className="text-base  font-[700] text-[#0A2640]">Severus Snape <br /> <span className="text-base font-[400] text-[#0A2640]"> Manager @ Slytherin</span></h2>
                </div>
            </div>
            <div className="w-[350px] h-[322px] flex flex-col justify-between p-10 bg-white rounded-[12px]">
                <h1 className="font-[400] text-2xl text-black pb-10">“Release facebook responsive web design business model canvas seed money monetization.”</h1>
                <div className="flex gap-2">
                    <img src={qiz}  />
                    <h2 className="text-base font-[700] text-[#0A2640]">Harry Potter <br /> <span className="text-base font-[400] text-[#0A2640]"> Team Leader @ Gryffindor</span></h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials
