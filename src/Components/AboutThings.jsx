import Rectangle2 from "../Images/Rectangle2.png"
import Rectangle4 from "../Images/Rectangle4.png"


const AboutThings = () => {
  return (
    <div className="bg-[#0A2640] py-10 flex flex-col gap-8">
          <div className="w-[60%] mx-auto flex flex-col gap-4">
            <h1 className="text-slate-400 font-[400] text-base">Our values</h1>
            <h2 className="text-white font-[400] text-4xl">Things in we believe</h2>
            <p className="text-slate-400 font-[400] text-base">Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. </p>

          </div>
          <div className="w-[60%] mx-auto flex gap-10 items-center">
            <img className="w-[150px] h-[150px]" src={Rectangle2} />
            <h1 className="text-white w-[600px] font-[400] text-2xl">We are commited. <br /> <span className="text-slate-400 font-[400] text-base">Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. </span></h1>
          </div>
          <div className="w-[60%] mx-auto flex gap-10 items-center">
            <img className="w-[150px] h-[150px]" src={Rectangle4} />
            <h1 className="text-white w-[600px] font-[400] text-2xl">We are responsible. <br /> <span className="text-slate-400 font-[400] text-base">Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. </span></h1>
          </div>
          <div className="w-[60%] mx-auto flex gap-10 items-center">
            <img className="w-[150px] h-[150px]" src={Rectangle2} />
            <h1 className="text-white w-[600px] font-[400] text-2xl">We aim for progress. <br /> <span className="text-slate-400 font-[400] text-base">Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. </span></h1>
          </div>
        </div>
  )
}

export default AboutThings
