import NavLink from "../Components/Navlink";
import blackBoldo from "../Images/blackBoldo.png";
import BlogCarts from "../Components/BlogCart"
import names1 from "../Images/names1.png"
import names2 from "../Images/names2.png"
import names3 from "../Images/names3.png"
import card1 from "../Images/card1.png"
import card2 from "../Images/card2.png"
import card3 from "../Images/card3.png"
import Rectangle3 from "../Images/Rectangle3.png"
import Rectangle1 from "../Images/Rectangle1.png"
import Action from "../Components/Action";
import Footer from "../Components/Footer";
import BlogThings from "../Components/BlogThings";
import BlogNews from "../Components/BlogNews";
import BlogButton from "../Components/BlogButton";

const Blog = () => {
  return (
    <div>
      <div className="">
      <header className="flex justify-between w-[90%] mx-auto py-3 text-black">
                    <div><img src={blackBoldo} /></div>
                    <div className="flex items-center gap-6 ">
                        <NavLink link="/">Product</NavLink>
                        <NavLink link="/blog">Blog</NavLink>
                        <NavLink link="/about">About</NavLink>
                        <button className="px-3 py-1 border border-[#0A2640] text-[#0A2640] rounded-2xl">Log in</button>
                    </div>
        </header>
          <BlogThings/>
          <BlogNews/>
            <div className="w-[80%] mx-auto my-8 flex justify-between items-center flex-wrap gap-3">
                <BlogCarts img={card1} images={names1} names="Chandler Bing" h2text="Pitch termsheet backing validation focus release."/>
                <BlogCarts img={Rectangle3} images={names2} names="Rachel Green" h2text="Seed round direct mailing non-disclosure agreement graphical user interface rockstar."/>
                <BlogCarts img={card3} images={names3} names="Monica Geller" h2text="Beta prototype sales iPad gen-z marketing network effects value proposition"/>
                <BlogCarts img={Rectangle1} images={names1} names="Chandler Bing" h2text="Pitch termsheet backing validation focus release."/>
                <BlogCarts img={card2} images={names2} names="Rachel Green" h2text="Seed round direct mailing non-disclosure agreement graphical user interface rockstar."/>
                <BlogCarts img={card3} images={names3} names="Monica Geller" h2text="Beta prototype sales iPad gen-z marketing network effects value proposition"/>
            </div>
        <BlogButton/>
        <Action/>
        <Footer/>
        </div>
        
    </div>
  )
}

export default Blog
