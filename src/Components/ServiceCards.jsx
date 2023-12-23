
const ServiceCards = (props) => {
  return (
    <div className="card ">
        <img className="w-[300px] h-[354px] rounded-[24px] " src={props.img} />
        <h1 className="font-[400] text-2xl text-black my-2">{props.h1text}</h1>
        <h2 className="font-[400] text-base text-slate-300 my-2">Learning curve network effects <br /> return on investment.</h2>
        <button className="font-[700] text-xl text-black border-b-2 border-black">Explore page {"=>"}</button>
    </div>
  )
}

export default ServiceCards;
