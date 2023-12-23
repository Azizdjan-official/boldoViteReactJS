import boldoLogo from "../Images/Logo-tepadagi.png";
import NavLink from "../Components/Navlink";

const NavHeader = () => {
  return (
    <div>
      <header className="flex justify-between w-[90%] mx-auto py-3">
                    <div><img src={boldoLogo} /></div>
                    <div className="flex items-center gap-6 text-white">
                        <NavLink link="/">Product</NavLink>
                        <NavLink link="/blog">Blog</NavLink>
                        <NavLink link="/about">About</NavLink>
                        <button className="px-3 py-1 bg-white text-[#0A2640] rounded-2xl">Log in</button>
                    </div>
        </header>
    </div>
  )
}

export default NavHeader
