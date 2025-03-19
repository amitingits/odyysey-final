import React from "react";

const Glimpse = () => {
  return (
    <>
      <div id="glimpses" className="glimpsePage">
        <h1 className="glimpseTitle">Glimpses</h1>
        <div className="grid-container">
          <div className="grid-item item1"></div>
          <div className="grid-item item2"></div>
          <div className="grid-item item3"></div>
          <div className="grid-item item4">
            <h1 className="middleHeading bg-gradient-to-r from-[#C6D5FF] via-[#476BD0] to-[#476BD0] bg-clip-text text-transparent text-center">
              AIODYSSEY 2024
            </h1>
          </div>
          <div className="grid-item item5"></div>
          <div className="grid-item item6"></div>
        </div>
      </div>
    </>
  );
};

export default Glimpse;
