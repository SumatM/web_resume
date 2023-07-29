import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { MdLiveTv } from "react-icons/md";
import ToggleComponent from "./ToggleComponent";
import { useSelector } from "react-redux";

const arivuKey = {
  heading: "Key features",
  val: [
    "RESTful APIs",
    "Authentication",
    "Authorization",
    "Secure Endpoints",
    "Database models",
    "Interactive U/I",
    "Integrated with backend APIs",
    "Sorting, Searching, Filtering & Pagination",
  ],
};

const arivuTech = {
  heading: "Tech Stack",
  val: ["JavaScript", "React", "Chakra UI", "MongoDB", "Express", "Node.js"],
};

const arivuResponsibility = {
  heading: "Team Lead",
  val: [
    "Guided developers and ensured efficient collaboration for seamless cross-functional execution, fostering a cohesive team environment.",
    "Built APIs, secured endpoints, and implemented login, signup, and payment pages.",
    "Integrated website components for smooth user flow.",
  ],
};


const Arivu = () => {
  const theme = useSelector((s)=> s.themeReducer.value)
  return (
    <div>
      <div
        style={{
          color: theme.RtextColor,
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          padding: "10px",
          padding: "10px",
        }}
        className="mt-3"
      >
        {/* head of project  */}
        <Link target="_blank" href="https://puny-potato-4945.vercel.app/">
        <h1 className="text-base font-bold text-white">{"Coursera Clone (Arivu)"}</h1>
        </Link>
        {/* body of project  */}
        <div className="mt-2">
          <div className="text-sm">
            <p>
              Arivu is an online learning platform that offers courses across
              various domains, similar to Coursera.
            </p>
            <p>It is a collaborative project build in a span of 5 days</p>
          </div>
          <div>
            <div className="mt-2">
              <ToggleComponent {...arivuKey} />
            </div>
            <div className="mt-2">
              <ToggleComponent {...arivuTech} />
            </div>
          </div>
          {/* areas of responsibility  */}
          <div>
            <div className="mt-2">
              <h1 className="text-sm font-bold ">Areas of Responsibility</h1>
            </div>
            <div className="mt-2">
              <ToggleComponent {...arivuResponsibility} />
            </div>
          </div>
        </div>
        {/* footer  */}
        <div className="flex justify-around mt-2 border-gray-600 border-spacing-1">
          <div className="flex flex-col items-center hover:cursor-pointer">
            <Link target="_blank" href="https://github.com/SumatM/Arivu">
              <BsGithub color={theme.iconColor} size="20px" />
            </Link>
            <p className="font-bold text-xs">GitHub</p>
          </div>
          <div className="flex flex-col items-center hover:cursor-pointer">
            <Link target="_blank" href="https://puny-potato-4945.vercel.app/">
              <MdLiveTv color={theme.iconColor} size="20px" />
            </Link>
            <p className="font-bold text-xs">Live</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Arivu };
