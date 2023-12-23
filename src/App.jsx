import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
      
      
    </>
  );
}

export default App;
