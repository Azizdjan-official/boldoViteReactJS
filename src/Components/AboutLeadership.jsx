import Image1 from "../Images/Image1.png"
import Image2 from "../Images/Image2.png"
import Image3 from "../Images/Image3.png"


const AboutLeadership = () => {
  return (
    <div>
          <div className="w-[80%] mx-auto py-20">
              <h1>Our team</h1>
              <h2 className="text-black my-5 text-5xl font-[400]">The leadership team</h2>
              <p className="text-[#777777] text-xl font-[400]">Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. </p>
                <div className="flex w-[100%] justify-between mt-20">
                  <div className="flex flex-col gap-4">
                    <img src={Image1}/>
                    <h1 className="text-black  text-3xl font-[400]">Michael Scott</h1>
                    <h2 className="text-[#777777] text-lg font-[400]">General Manager</h2>
                  </div>
                  <div className="flex flex-col gap-4">
                    <img src={Image2}/>
                    <h1 className="text-black  text-3xl font-[400]">Michael Scott</h1>
                    <h2 className="text-[#777777] text-lg font-[400]">General Manager</h2>
                  </div>
                  <div className="flex flex-col gap-4">
                    <img src={Image3}/>
                    <h1 className="text-black  text-3xl font-[400]">Michael Scott</h1>
                    <h2 className="text-[#777777] text-lg font-[400]">General Manager</h2>
                  </div>
              </div>
          </div>
        </div>
  )
}

export default AboutLeadership
