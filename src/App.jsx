import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Games from "./components/Games";
import Timeline from "./components/Timeline";
import Speakers from "./components/Speaker";
import Sponsors from "./components/Sposor";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Games />
      <Speakers />
      {/* <Timeline /> */}
      <Sponsors />
    </>
  );
}

export default App;
