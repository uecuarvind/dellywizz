import About from "./Components/About";
import Main from "./Components/Main";
import Overview from "./Components/OverView";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import Background from "./Components/Background";
function App() {
  return (
    <div className="flex flex-col overflow-x-hidden  ">
      <Background />
      <Navbar />
      <div className="min-h-screen">
        <div className="absolute">
          <Main />
        </div>

        <div className="relative">
          <About />
        </div>

        <div className="flex flex-col relative bg-white">
          <Overview />

          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
