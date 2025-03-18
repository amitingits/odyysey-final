import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Games from "./components/Games";
import Timeline from "./components/Timeline";
import Speakers from "./components/Speaker";
import Sponsors from "./components/Sposor";
import About from "./components/About";
import Glimpse from "./components/Glimpse";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Games />
      <Speakers />
      <Timeline />
      <Glimpse />
      <Sponsors />
    </>
  );
}

export default App;
