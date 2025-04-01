import "./App.css";
import Navbar from "/src/components/Navbar";
import Home from "/src/components/Home";
import Games from "/src/components/Games";
import Timeline from "/src/components/Timeline";
import Speakers from "/src/components/Speaker";
import Sponsors from "/src/components/Sponsor";
import About from "/src/components/About";
import Glimpse from "/src/components/Glimpse";
import Loader from "/src/components/Loader";
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
