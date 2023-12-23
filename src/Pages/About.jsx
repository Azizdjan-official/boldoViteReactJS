import NavHeader from "../Components/NavHeader";
import Action from "../Components/Action"
import Footer from "../Components/Footer"
import AboutSection from "../Components/AboutSection"
import AboutRectangle from "../Components/AboutRectangle"
import AboutLeadership from "../Components/AboutLeadership"
import AboutThings from "../Components/AboutThings"
import AboutNavheader2 from "../Components/AboutNavheader2"

const About = () => {
  return (
    <div>
        <div className="bg-[#0A2640]">
          <NavHeader/>
          <AboutNavheader2/>
        </div>
        <AboutSection/>
        <AboutRectangle/>
        <AboutLeadership/>
        <AboutThings/>
        <div className="py-10">
            <Action/>
        </div>
        <div>
          <Footer/>
        </div>
    </div>
  );
};

export default About;