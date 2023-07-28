import { Spartan } from "./Spartan";
import { Arivu } from "./Arivu";
import { useSelector } from "react-redux";
import styles from "./right.module.css";

const Right = () => {
  const theme = useSelector((s) => s.themeReducer.value);
  const { face } = styles;
  return (
    <div className=" basis-1/2 text-white p-5">
      {/* Professional Summary
       */}
      <div>
        <h1 className="text-xl  font-bold tracking-wide">
          PROFESSIONAL SUMMARY
        </h1>
        <div className="mt-2">
          <p className="text-sm" style={{ color: theme.RtextColor }}>
            MERN Stack Developer proficient in HTML, CSS, JavaScript,
            React,Next.js, Redux, Node.js, Express, and MongoDB. Skilled in
            building scalable web applications and passionate about delivering
            high-quality code. Seeking opportunities to contribute to dynamic
            projects and enhance user experiences.
          </p>
        </div>
      </div>
      {/* animation box  */}
      <div
        style={{ color: theme.backgroundTheme }}
        className={styles[`${`cube-container`}`]}
      >
        <div className={styles.cube}>
          <div
            style={{ background: theme.iconColor }}
            className={`${face} ${styles.front}`}
          >
            HTML
          </div>
          <div
            style={{ background: theme.iconColor }}
            className={`${face} ${styles.back}`}
          >
            Node.js
          </div>
          <div
            style={{ background: theme.iconColor }}
            className={`${face} ${styles.top}`}
          >
            JavaScript
          </div>
          <div
            style={{ background: theme.iconColor }}
            className={`${face} ${styles.bottom}`}
          >
            React.js
          </div>
          <div
            style={{ background: theme.iconColor }}
            className={`${face} ${styles.left}`}
          >
            MongoDB
          </div>
          <div
            style={{ background: theme.iconColor }}
            className={`${face} ${styles.right}`}
          >
            Express
          </div>
        </div>
      </div>
      {/* education  */}
      <div className="mt-2">
        <h1 className="text-xl  font-bold tracking-wide">EDUCATION</h1>
        <div className="mt-1">
          {/* masai school  */}
          <div style={{ color: theme.RtextColor }}>
            <h1 className="text-base font-bold text-white">
              Full Stack Web Development (Full Time)
            </h1>
            <p className="text-xs font-bold ">Masai School, Bengaluru</p>
            <p className="text-xs italic">October, 2022 - Aug, 2023</p>
          </div>
          {/* bsc  */}
          <div style={{ color: theme.RtextColor }} className="mt-1">
            <h1 className="text-base font-bold text-white">
              B.Sc. Chemistry Hounours
            </h1>
            <p className="text-xs font-bold  ">Himachal Pradesh University</p>
            <p className="text-xs italic">June, 2013 - May, 2016</p>
          </div>
        </div>
      </div>
      {/* projects  */}
      <div className="mt-2">
        <h1 className="text-xl  font-bold tracking-wide">PROJECTS</h1>
        <div>
          <div
            style={{
              borderTop: `2px solid ${theme.RtextColor}`,
              width: "50%",
              marginTop: "0.4rem",
            }}
          ></div>
          {/* spartan */}
          <Spartan />
          {/* Arivu  */}
          <Arivu />
        </div>
      </div>
    </div>
  );
};

export default Right;
