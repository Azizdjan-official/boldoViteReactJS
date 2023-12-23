

const BlogCarts = (props) => {
  return (
    <div className="card w-[30%]">
        <img className="w-[300px] h-[354px] rounded-[24px] " src={props.img} />
        <h1 className="font-[700] text-base text-black my-2">Category <span className="mx-2 text-base font-[400] text-[#777777]">November 22, 2021</span></h1>
        <h2 className="font-[400] w-[300px] text-xl text-black my-2">{props.h2text}</h2>
        <div className="flex gap-5">
            <img src={props.images} />
            <h1>{props.names}</h1>
        </div>
    </div>
  )
}

export default BlogCarts;
