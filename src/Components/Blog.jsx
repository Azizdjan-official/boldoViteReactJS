import blogRasmi from "../Images/blogRasmi.png"
import pastIcon from "../Images/pastIcon.png"
import names1 from "../Images/names1.png"
import names2 from "../Images/names2.png"
import names3 from "../Images/names3.png"
import card1 from "../Images/card1.png"
import card2 from "../Images/card2.png"
import card3 from "../Images/card3.png"
import BlogCarts from "./BlogCart"

const Blog = () => {
  return (
    <div>
        <div className="w-[90%] mx-auto py-20">
            <img className="w-[100%]" src={blogRasmi}/>
        </div>
        <div className="w-[90%] mx-auto flex justify-between">
            <div>
                <h1 className="font-[400] text-4xl text-black">We connect our customers <br /> with the best, and help them <br /> keep up-and stay open.</h1>
            </div>
            <div className="flex flex-col">
                <div className="flex gap-3 justify-between p-4 border-b-2 border-slate-500">
                    <h1 className="font-[400] text-xl">We connect our customers with the best?</h1>
                    <img src={pastIcon}  />
                </div>
                <div className="flex gap-3 justify-between p-4 border-b-2 border-slate-500">
                    <h1 className="font-[400] text-xl">Android research & development rockstar? </h1>
                    <img src={pastIcon}  />
                </div>
            </div>
        </div>
        <div className="w-[90%] mx-auto my-20 text-center">
            <h1 className="text-[#777777] text-xl font-[400] w-[842px] mx-auto">Our Blog</h1>
            <h2 className="text-black text-5xl font-[400] w-[842px] mx-auto">Value proposition accelerator product management venture</h2>
        </div>
        <div className="w-[90%] mx-auto flex justify-between items-center">
            <BlogCarts img={card1} images={names1} names="Chandler Bing" h2text="Pitch termsheet backing validation focus release."/>
            <BlogCarts img={card2} images={names2} names="Rachel Green" h2text="Seed round direct mailing non-disclosure agreement graphical user interface rockstar."/>
            <BlogCarts img={card3} images={names3} names="Monica Geller" h2text="Beta prototype sales iPad gen-z marketing network effects value proposition"/>
            
        </div>
        <div className="w-[10vw] my-10 mx-auto">
            <button className="w-[219px] h-[60px] rounded-[56px] text-[#0A2640] p-[16px, 56px, 16px, 56px] font-[700] border border-[#0A2640]">Load more</button>
        </div>
    </div>
  )
}

export default Blog;
