import medal from "../assets/medal.png";
import halfCircle from "../assets/half-circle.png";
import frontman from "../assets/frontman.svg";
import podium from "../assets/podium.png";
import React, { useState, useEffect } from "react";

const Leaderboard = ({ isAdmin }) => {
  const [topTeams, setTopTeams] = useState([]);
  console.log(isAdmin);
  return (
    <div className="px-8  text-white lg:mt-16 lg:h-[90dvh] flex flex-col lg:gap-10 h-dvh">
      <img
        src="/src/assets/white-logo.svg"
        alt="Logo"
        className="h-[70px] md:h-[71px]"
      />
      <div className="w-full flex justify-center align-middle">
        <img
          src="/src/assets/leader-board.png"
          alt="LeaderBoard"
          className="h-[40px] w-auto"
        />
      </div>
      {/* //here */}
      <div className="h-full flex justify-center align-middle ">
        <div className="w-[30%] h-full rounded-3xl border-2 border-transparent bg-gradient-to-t from-[#476BD0] via-[#C6D5FF] to-[#476BD0] p-[2px] ">
          <div className="h-full w-full rounded-3xl bg-black p-[20px] flex flex-col  justify-between align-middle">
            <div className="w-full flex justify-center  items-center h-[100px] ">
              <img
                src="/src/assets/leader-board.png"
                alt="LeaderBoard"
                className="h-[20px] w-auto"
              />
            </div>
            <div className="p-3 flex flex-col gap-2 ">
              <div className="h-[92px] w-full rounded-3xl bg-gradient-to-t from-[#476BD0] to-[#C6D5FF] flex align-middle items-center p-3 justify-between">
                <div className="border-2 border-white rounded-full w-[45px] h-[45px] flex justify-center items-center">
                  1st
                </div>
                <div className="main-text rubik-font text-[#0C092A]">
                  <div className="team-name font-bold ">
                    {topTeams.length > 0 ? topTeams[0][0] : "No Team"}
                  </div>
                  <div className="score font-bold ">
                    {topTeams.length > 0 ? topTeams[0][1] : "No Team"}
                  </div>
                </div>
                <img src={medal} alt="Medal" className="h-[40px] w-auto" />
              </div>
              <div className="h-[92px] w-full rounded-3xl bg-gradient-to-t from-[#476BD0] to-[#C6D5FF] flex align-middle items-center p-3 justify-between">
                <div className="border-2 border-white rounded-full w-[45px] h-[45px] flex justify-center items-center">
                  2nd
                </div>
                <div className="main-text rubik-font text-[#0C092A]">
                  <div className="team-name font-bold">
                    {" "}
                    {topTeams.length > 0 ? topTeams[1][0] : "No Team"}
                  </div>
                  <div className="score font-bold">
                    {" "}
                    {topTeams.length > 0 ? topTeams[1][1] : "No Team"}
                  </div>
                </div>
                <img src={medal} alt="Medal" className="h-[40px] w-auto" />
              </div>
              {/* 3rd place */}
              <div className="h-[92px] w-full rounded-3xl border-2 border-transparent bg-gradient-to-t from-[#476BD0] via-[#8b95b1] to-[#7e93ca]">
                <div className="h-full w-full flex align-middle items-center p-3 justify-between bg-[#222222B2]  rounded-3xl">
                  <div className="border-2 border-white rounded-full w-[45px] h-[45px] flex justify-center items-center">
                    3rd
                  </div>
                  <div className="main-text rubik-font">
                    <div className="team-name font-bold">
                      {topTeams.length > 0 ? topTeams[2][0] : "No Team"}
                    </div>
                    <div className="score font-bold">
                      {topTeams.length > 0 ? topTeams[2][1] : "No Team"}
                    </div>
                  </div>
                  <div className="w-[40px]"></div>
                </div>
              </div>
              {/* 4th */}
              <div className="h-[92px] w-full rounded-3xl border-2 border-transparent bg-gradient-to-t from-[#476BD0] via-[#8b95b1] to-[#7e93ca]">
                <div className="h-full w-full flex align-middle items-center p-3 justify-between bg-[#222222B2]  rounded-3xl">
                  <div className="border-2 border-white rounded-full w-[45px] h-[45px] flex justify-center items-center">
                    4th
                  </div>
                  <div className="main-text rubik-font">
                    <div className="team-name font-bold">
                      {" "}
                      {topTeams.length > 0 ? topTeams[3][0] : "No Team"}
                    </div>
                    <div className="score font-bold">
                      {" "}
                      {topTeams.length > 0 ? topTeams[3][1] : "No Team"}
                    </div>
                  </div>
                  <div className="w-[40px]"></div>
                </div>
              </div>
              {/* 5th */}
              <div className="h-[92px] w-full rounded-3xl border-2 border-transparent bg-gradient-to-t from-[#476BD0] via-[#8b95b1] to-[#7e93ca]">
                <div className="h-full w-full flex align-middle items-center p-3 justify-between bg-[#222222B2]  rounded-3xl">
                  <div className="border-2 border-white rounded-full w-[45px] h-[45px] flex justify-center items-center">
                    5th
                  </div>
                  <div className="main-text rubik-font">
                    <div className="team-name font-bold">
                      {" "}
                      {topTeams.length > 0 ? topTeams[4][0] : "No Team"}
                    </div>
                    <div className="score font-bold">
                      {" "}
                      {topTeams.length > 0 ? topTeams[4][1] : "No Team"}
                    </div>
                  </div>
                  <div className="w-[40px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[10%]">{""}</div>
        <div className="w-[45%] h-full rounded-3xl border-2 border-transparent bg-gradient-to-t from-[#476BD0] via-[#C6D5FF] to-[#476BD0] ">
          <div className="h-full w-full rounded-3xl bg-black p-[20px]">
            <h1 className="lg:text-5xl relative  squid-game-font">Winners</h1>
            <img src={frontman} alt="Frontman" className=" relative top-30" />

            <img
              src={halfCircle}
              alt="Half-Circle"
              className="relative top-80 left-180"
            />
            <img
              src={podium}
              alt="podium"
              className="relative left-50 h-[400px]"
            />
          </div>
        </div>
      </div>
      <div
        className={`flex justify-center align-middle ${!isAdmin && "hidden"} `}
      >
        <Form topTeams={topTeams} setTopTeams={setTopTeams} />
      </div>
    </div>
  );
};

const Form = ({ topTeams, setTopTeams }) => {
  const [teamScores, setTeamScores] = useState(() => {
    const savedScores = localStorage.getItem("teamScores");
    return savedScores ? JSON.parse(savedScores) : {};
  });
  const [teamName, setTeamName] = useState("");
  const [score, setScore] = useState("");

  useEffect(() => {
    localStorage.setItem("teamScores", JSON.stringify(teamScores));
    const sortedTeams = Object.entries(teamScores).sort(
      ([, scoreA], [, scoreB]) => scoreB - scoreA
    );
    const top5Teams = sortedTeams.slice(0, 5);
    setTopTeams(top5Teams);
  }, [teamScores, setTopTeams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!teamName || isNaN(score) || score === "") return;

    setTeamScores((prevScores) => {
      const newScores = { ...prevScores };
      newScores[teamName] = (newScores[teamName] || 0) + parseInt(score, 10);
      return newScores;
    });

    setTeamName("");
    setScore("");
  };

  const handleIncrement = (team) => {
    const additionalScore = parseInt(
      prompt(`Enter score to add for ${team}:`),
      10
    );
    if (!isNaN(additionalScore) && additionalScore > 0) {
      setTeamScores((prevScores) => ({
        ...prevScores,
        [team]: prevScores[team] + additionalScore,
      }));
    }
  };

  const handleDelete = (team) => {
    if (confirm(`Are you sure you want to delete ${team}?`)) {
      setTeamScores((prevScores) => {
        const newScores = { ...prevScores };
        delete newScores[team];
        return newScores;
      });
    }
  };

  const sortedTeams = Object.entries(teamScores).sort(
    ([, scoreA], [, scoreB]) => scoreB - scoreA
  );

  return (
    <div className="p-4 bg-gray-900 text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Game Score Tracker</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Team Name"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          className="p-2 mr-2 bg-gray-800 text-white border border-gray-700 rounded"
        />
        <input
          type="number"
          placeholder="Score"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          className="p-2 mr-2 bg-gray-800 text-white border border-gray-700 rounded"
        />
        <button
          type="submit"
          className="p-2 bg-blue-600 hover:bg-blue-700 rounded"
        >
          Add Score
        </button>
      </form>
      <h2 className="text-xl font-semibold mb-2">All Teams</h2>
      <ul>
        {sortedTeams.map(([team, score]) => (
          <li
            key={team}
            className="p-2 border-b border-gray-700 flex justify-between items-center"
          >
            <span>
              {team}: {score} points
            </span>
            <div>
              <button
                onClick={() => handleIncrement(team)}
                className="ml-4 p-1 bg-green-600 hover:bg-green-700 rounded"
              >
                + Add Score
              </button>
              <button
                onClick={() => handleDelete(team)}
                className="ml-4 p-1 bg-red-600 hover:bg-red-700 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mt-4">
        Top 5 Teams (Exported Stats)
      </h2>
      <ul>
        {topTeams.map(([team, score]) => (
          <li key={team} className="p-2 border-b border-gray-700">
            {team}: {score} points
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
