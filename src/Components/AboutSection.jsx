import Rectangle1 from "../Images/Rectangle1.png"
import Rectangle2 from "../Images/Rectangle2.png"
import Rectangle3 from "../Images/Rectangle3.png"
import Rectangle4 from "../Images/Rectangle4.png"
import Rectangle5 from "../Images/Rectangle5.png"

const AboutSection = () => {
  return (
    <div >
          <div className="w-[80%] mx-auto flex justify-around mt-[-60px]">
              <div className="flex flex-col gap-10">
                <img src={Rectangle1} />
                <img src={Rectangle2} />
              </div>
              <div>
                <img src={Rectangle3}  />
              </div>
              <div className="flex flex-col gap-10">
                <img src={Rectangle4} />
                <img src={Rectangle5} />
              </div>
          </div>
            <div className="w-[50%] mx-auto flex flex-col gap-6 my-10">
              <h1 className="text-[#777777] font-[400] text-base">Our Story</h1>
              <h2 className="text-5xl  font-[400] text-black">Handshake infographic mass market crowdfunding iteration.</h2>
              <p className="text-[#777777] font-[400] text-base ">Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. Sales user experience branding growth hacking holy grail monetization conversion prototype stock network effects. Learning curve network effects return on investment bootstrapping business-to-consumer. </p>
            </div>
        </div>
  )
}

export default AboutSection
