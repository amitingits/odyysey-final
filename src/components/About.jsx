import aboutimg from "../assets/about-img.svg";
export default function About() {
  return (
    <div className="m-1 p-1 aboutPage">
      <h1 className="text-[30px] m-1 p-1">About</h1>
      <h1 className="text-5xl squidFont m-1 p-1">AI ODYYSEY</h1>
      <div className="flex about-part-1">
        <div className="w-1/2 h-1/2 m-1 p-1 text-[18px] paragraph-div-1">
          <p>
            We are thrilled to announce the launch of AI Odyssey 2025, an event
            designed to inspire and connect individuals through innovation,
            creativity, and technological advancement
          </p>
          <p className="para2">
            <br />
            This year, we’re embracing a new approach by integrating AI with the
            thrill of gaming. We aim to create an immersive and interactive
            learning experience that we hope will resonate with everyone and
            make learning enjoyable and engaging for all.
          </p>
        </div>
        <div className=" flex w-1/2 h-1/2 justify-center p-2 aboutImage">
          <img className="h-full" src={aboutimg} alt="img" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-15 about-part-2">
        <div className="p-5 ">
          <h2 className="text-4xl font-semibold bg-gradient-to-r from-[#C6D5FF] via-[#476BD0] to-[#476BD0] bg-clip-text text-transparent ">
            AI Department
          </h2>
          <p className="mt-2 text-[18px]">
            The Department of Artificial Intelligence at G.H. Raisoni College of
            Engineering has evolved into a center for innovative education under
            the leadership of Dr. Adil Moin (Head of AI). Established in 2021,
            the department focuses on hands-on projects in AI, machine learning,
            and emerging technologies, equipping students with the skills needed
            to tackle real-world problems through a comprehensive curriculum.
          </p>
        </div>

        <div className="p-5 ">
          <h2 className=" text-4xl font-semibold bg-gradient-to-r from-[#C6D5FF] via-[#476BD0] to-[#476BD0] bg-clip-text text-transparent ">
            Centre of Excellence (AIML)
          </h2>
          <p className="mt-2 text-[18px]">
            GHRCE, Nagpur, the Centre of Excellence (CoE) is a vibrant
            organizational unit committed to attaining unmatched excellence in a
            particular field. As a central hub for implementing best practices,
            conducting cutting-edge research, providing high-quality training,
            and driving innovation, the CoE is a leader in its field.
          </p>
        </div>
      </div>

      <div className="mt-10 text-center about-part-3">
        <h2 className="text-4xl font-semibold bg-gradient-to-r from-[#C6D5FF] via-[#476BD0] to-[#476BD0] bg-clip-text text-transparent ">
          IEEE CIS SBC
        </h2>
        <p className="mt-2 text-[18px]">
          The IEEE Computational Intelligence Society (CIS) is dedicated to
          developing and promoting educational resources for artificial
          intelligence, machine learning, and related domains. We foster a
          strong community that emphasizes an understanding in these fields and
          works to enhance creativity and diversity in Computational
          Intelligence while supporting chapter members’ active role in
          promoting these objectives.
        </p>
      </div>
    </div>
  );
}
