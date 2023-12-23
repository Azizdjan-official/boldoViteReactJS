import Action from "../Components/Action";
import Blog from "../Components/Blog";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Service from "../Components/Service";
import Testimonials from "../Components/Testimonials";

const Home = () => {
  return (
    <div>
      <Header />
      <Service />
      <Testimonials />
      <Blog />
      <Action/>
      <Footer/>
      
    </div>
  );
};

export default Home;