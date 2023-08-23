import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PortFolio from "./components/PortFolio";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="App">
 <Navbar/>
 <Home/>
 <SocialLinks/>
 <About/>
 <PortFolio/>
 <Skills/>
 <Contact/>
    </div>
  );
}

export default App;
