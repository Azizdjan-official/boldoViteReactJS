
const Action = () => {
  return (
    <div>
      <div className="w-[90%] mx-auto rounded-md bg-[#0A2640] text-center flex flex-col items-center justify-center p-10">
            <div ><h1 className="font-[400] text-white text-5xl">An enterprise template to ramp <br /> up your company website</h1></div>
            <div className="flex mt-10 gap-4">
                <input className="w-[370px] placeholder:text-black h-[56px] rounded-[240px] p-5 border" type="text" placeholder="Your email Address"/>
                <button className="w-[210px] h-[60px] bg-[#65E4A3] rounded-[56px] p-[16px, 56px, 16px, 56px] text-[#0A2640] font-[700]">Start now</button>
            </div>
      </div>
    </div>
  )
}

export default Action
