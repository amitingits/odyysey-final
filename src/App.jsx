import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Games from "./components/Games";
import Timeline from "./components/Timeline";
import Speakers from "./components/Speaker";
import Sponsors from "./components/Sponsor";
import About from "./components/About";
import Glimpse from "./components/Glimpse";
import Loader from "./components/Loader";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  // Use useEffect to hide the loader after 3 seconds
  useEffect(() => {
    // Set a timeout to hide the loader after 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 3000ms = 3 seconds

    // Cleanup the timeout when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Display loader while loading is true */}
      {loading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
}

export default App;
