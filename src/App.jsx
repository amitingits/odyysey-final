import "./App.css";
import { Routes, Route } from "react-router-dom"; // ❌ No BrowserRouter here
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Games from "./components/Games";
import Timeline from "./components/Timeline";
import Speakers from "./components/Speaker";
import Sponsors from "./components/Sponsor";
import About from "./components/About";
import Glimpse from "./components/Glimpse";
import Loader from "./components/Loader";
import Leaderboard from "./components/Leaderboard";
import Hackathon from "./components/Hackathon";

function App() {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <About />
                  <Games />
                  <Speakers />
                  <Timeline />
                  <Glimpse />
                  <Sponsors />
                </>
              }
            />
            <Route
              path="/leaderboard"
              element={<Leaderboard isAdmin={isAdmin} />}
            />
            <Route path="/hackathon" element={<Hackathon />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
