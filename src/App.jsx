import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Games from "./components/Games";
import Timeline from "./components/Timeline";
import Speakers from "./components/Speaker";
import Sponsors from "./components/Sposor";
import About from "./components/About";
import Temp from "./components/Temp";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Games />
      <Speakers />
      <Timeline />
      <Sponsors />
      {/* <Temp />? */}
    </>
  );
}

export default App;
