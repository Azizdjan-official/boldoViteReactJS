import qoraBoldo from "../Images/qoraBoldo.png"
const Footer = () => {
  return (
    <div>
      <div className="w-[90%] mx-auto flex justify-between my-10">
            <div className="flex flex-col gap-3">
                <img className="w-[156px] h-[41px]" src={qoraBoldo} />
                <p className="font-[400] w-[300px] text-base text-[#777777]">Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</p>
                <h1 className="font-[400] text-base text-[#777777]">All rights reserved.</h1>
            </div>
            <div className="flex flex-col gap-3">
                <h1 className="font-[700] text-xl text-black">Landing</h1>
                <p className="font-[400] text-xl text-[#777777]">Home</p>
                <p className="font-[400] text-xl text-[#777777]">Products</p>
                <p className="font-[400] text-xl text-[#777777]">Services</p>
            </div>
            <div className="flex flex-col gap-3">
                <h1 className="font-[700] text-xl text-black">Landing</h1>
                <p className="font-[400] text-xl text-[#777777]">Home</p>
                <p className="font-[400] text-xl text-[#777777]">Careers</p>
                <p className="font-[400] text-xl text-[#777777]">Services</p>
            </div>
            <div className="flex flex-col gap-3">
                <h1 className="font-[700] text-xl text-black">Resources</h1>
                <p className="font-[400] text-xl text-[#777777]">Blog</p>
                <p className="font-[400] text-xl text-[#777777]">Products</p>
                <p className="font-[400] text-xl text-[#777777]">Services</p>
            </div>
      </div>
    </div>
  )
}

export default Footer
