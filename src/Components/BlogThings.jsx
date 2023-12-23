import RectangleBlog from "../Images/RectangleBlog.png";
import names1 from "../Images/names1.png"

const BlogThings = () => {
  return (
    <div className="w-[90%] mx-auto flex flex-col items-center justify-center">
            <h1 className="text-center mt-12 font-[400] text-xl text-[#0A2640]">Blog</h1>
            <h2 className="text-center my-4 font-[400] text-6xl text-[#0A2640]">Thoughts and words</h2>
                <div className="flex justify-between border-b-2 border-[#0A2640] pb-10">
                    <img className="w-[550px] h-[386px]" src={RectangleBlog} />
                    <div className="flex flex-col justify-center p-10 gap-5 w-[50%]">
                        <h1  className="text-black font-[700] text-base">Category <span className="text-[#777777] font-[400] text-base">November 22, 2021</span></h1>
                        <h2 className="font-[400] text-black  text-5xl">Pitch termsheet backing validation focus release.</h2>
                        <span className="text-black flex gap-4 items-center font-[700] text-base"><img src={names1} />Chandler Bing</span>
                    </div>
                </div>
          </div>
  )
}

export default BlogThings
