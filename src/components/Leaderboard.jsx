import medal from "../assets/medal.png";
import halfCircle from "../assets/half-circle.png";
import frontman from "../assets/frontman.svg";
import podium from "../assets/podium.png";

const Leaderboard = () => {
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
                  <div className="team-name font-bold ">Team Name</div>
                  <div className="score font-bold ">69 pts</div>
                </div>
                <img src={medal} alt="Medal" className="h-[40px] w-auto" />
              </div>
              <div className="h-[92px] w-full rounded-3xl bg-gradient-to-t from-[#476BD0] to-[#C6D5FF] flex align-middle items-center p-3 justify-between">
                <div className="border-2 border-white rounded-full w-[45px] h-[45px] flex justify-center items-center">
                  2nd
                </div>
                <div className="main-text rubik-font text-[#0C092A]">
                  <div className="team-name font-bold">Team Name</div>
                  <div className="score font-bold">69 pts</div>
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
                    <div className="team-name font-bold">Team Name</div>
                    <div className="score font-bold">69 pts</div>
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
                    <div className="team-name font-bold">Team Name</div>
                    <div className="score font-bold">69 pts</div>
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
                    <div className="team-name font-bold">Team Name</div>
                    <div className="score font-bold">69 pts</div>
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
    </div>
  );
};

export default Leaderboard;
