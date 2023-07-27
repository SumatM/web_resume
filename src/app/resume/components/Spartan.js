import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { MdLiveTv } from "react-icons/md";
import ToggleComponent from './ToggleComponent'
import { useSelector } from "react-redux";


const spartanKey = {
  heading: "Key features",
  val: [
    "Sorting",
    "Search",
    "Add to Cart",
    "Payment",
    "Multiple device access",
    "Individual Product Page",
  ],
};

const spartanTech = {
  heading: "Tech Stack",
  val: ["HTML", "CSS", "JavaScript", "React", "Chakra UI", "Axios"],
};


const Spartan = () => {
  const theme = useSelector((s)=>s.themeReducer.value)
  return (
    <div>
      <div
      style={{
        color: theme.RtextColor,
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        padding: "10px",
      }}
      className="mt-3"
    >
      {/* head of project  */}
      <Link target="_blank" href="https://marvelous-crack-5191.vercel.app/">
        <h1 className="text-base font-bold text-white">
          Charles Tyrwhitt Clone (Spartan)
        </h1>
      </Link>
      {/* body of project  */}
      <div className="mt-2">
        <div className="text-sm">
          <p>
            Spartan is dedicated to men's fashion, with a focus on formal wear.
          </p>
          <p>It is an individual project build in a span of 6 days.</p>
        </div>
        <div>
          <div className="mt-2">
            <ToggleComponent {...spartanKey} />
          </div>
          <div className="mt-2">
            <ToggleComponent {...spartanTech} />
          </div>
        </div>
      </div>
      {/* footer  */}
      <div className="flex justify-around mt-2 border-gray-600 border-spacing-1">
        <div className="flex flex-col items-center hover:cursor-pointer">
          <Link target="_blank" href="https://github.com/SumatM/Spartan">
            <BsGithub color={theme.iconColor} size="20px" />
          </Link>
          <p className="font-bold text-xs">GitHub</p>
        </div>
        <div className="flex flex-col items-center hover:cursor-pointer">
          <Link target="_blank" href="https://marvelous-crack-5191.vercel.app/">
            <MdLiveTv color={theme.iconColor} size="20px" />
          </Link>
          <p className="font-bold text-xs">Live</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export  {Spartan};
