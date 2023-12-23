import boldoLogo from "../Images/Logo-tepadagi.png";
import tradeview from "../Images/tradeview.jpg";
import logo1 from "../Images/boldo-logo.png";
import logo2 from "../Images/presto-logo.png";
import { Component } from "react";
import NavHeader from "./NavHeader";

class Header extends Component{
    render(){
        return (
            <div className="header">
               <NavHeader/>
                <div className="flex justify-between items-center w-[90%] mx-auto py-10">
                    <div className="flex flex-col gap-8">
                        <h1 className="text-5xl text-white font-[400]">Save time by building  <br /> fast with Boldo Template </h1>
                        <h2 className="text-base text-slate-300 font-[400]">Funding handshake buyer business-to-business metrics iPad partnership. <br /> First mover advantage innovator success deployment non-disclosure.</h2>
                        <div className="flex gap-4">
                            <button className="w-[247px] h-[60px] bg-[#65E4A3] rounded-[56px] font-[700] text-[#0A2640]">Buy Template</button>
                            <button className="w-[187px] h-[60px] bg-transparent rounded-[56px] font-[700] text-white border border-white">Explore</button>
                        </div>
                    </div>
                    <div>
                        <img src={tradeview} />
                    </div>
                </div>
                <div className="flex justify-between py-4 w-[90%] mx-auto ">
                        <img src={logo1} />
                        <img src={logo2} />
                        <img src={logo1} />
                        <img src={logo2} />
                        <img src={logo1} />
                        <img src={logo2} />
                    </div>
            </div>
            
          );

    }
}


export default Header;