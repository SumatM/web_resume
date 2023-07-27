import { AiFillMail } from "react-icons/ai";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import { IoIosHelpBuoy } from "react-icons/io";
import styles from "./left.module.css";
import { useSelector } from "react-redux";


const Left = () => {
  const theme = useSelector((s)=>s.themeReducer.value)
  return (
    <div className=" basis-1/2   text-left">
      <div style={{background: theme.iconColor}} className={styles[`${`ball-animation`}`]}></div>
      {/* dp  */}
      <div
        className={styles.appear}
        style={{
          boxShadow: `20px -20px ${theme.iconColor}`,
          position: "relative",
          width: "60%",
        }}
      >
        <img src="/dp.png" alt="sumat" className="object-contain" />
      </div>
      {/* name & title  */}
      <div className="mt-2">
        <h1 className="text-4xl font-bold tracking-wide" style={{fontFamily:'monospace',color:theme.LtextColor}}>SUMAT MALLICK</h1>

        <h1 className={`text-sm font-light mt-1 `} style={{ color: theme.LtextColor }}>
          Full Stack Web Developer
        </h1>
      </div>

      {/* basic info  */}
      <div>
        <div className="text-sm" style={{ color: theme.LtextColor }}>
          <h1 className="text-xl font-bold tracking-wide mt-3 text-black">Contact Me</h1>
          <div className="mt-1">
            {/* email  */}
            <div className="flex items-center">
              <div className="pr-3">
                <AiFillMail style={{ color: theme.iconColor }} />
              </div>
              <div >
                <p>Sumatmallick@gmail.com</p>
              </div>
            </div>
            {/* mobile */}
            <div className="flex items-center pt-2">
              <div className="pr-3">
                <BiSolidPhoneCall size="1.1rem" style={{ color: theme.iconColor }} />
              </div>
              <div>
                <p>+91-889447615</p>
              </div>
            </div>
            {/* address  */}
            <div className="flex items-center pt-2">
              <div className="pr-3">
                <MdLocationPin size="1.2rem" style={{ color: theme.iconColor }} />
              </div>
              <div >
                <p>Kendrapara, Odisha</p>
              </div>
            </div>
            {/* linkedin */}
            <div className="flex items-center pt-2">
              <div className="pr-3">
                <IoLogoLinkedin size="1.2rem" style={{ color: theme.iconColor }} />
              </div>
              <div >
                <p>Sumat Mallick</p>
              </div>
            </div>
            {/* github */}
            <div className="flex items-center pt-2">
              <div className="pr-3">
                <BsGithub size="1rem" style={{ color: theme.iconColor }} />
              </div>
              <div >
                <p>SumatM</p>
              </div>
            </div>
            {/* portfolio */}
            <div className="flex items-center pt-2">
              <div className="pr-3">
                <IoIosHelpBuoy size="1.1rem" style={{ color: theme.iconColor }} />
              </div>
              <div >
                <p>Sumat Mallick</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* technical skills  */}
      <div className="text-sm">
        <div>
          <h1 className="text-xl font-bold tracking-wide mt-3" >TECH STACK</h1>
        </div>
        <div className="flex mt-1" style={{ color: theme.LtextColor }}>
          <div>
            <ul className="list-disc list-inside">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Next.js</li>
            </ul>
          </div>
          <div className="pl-5">
            <ul className="list-disc list-inside">
              <li>Redux</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>TypeScript</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>
      </div>
      {/* soft skills  */}
      <div className="text-sm">
        <div>
          <h1 className="text-xl font-bold tracking-wide mt-5 " >SOFT SKILLS</h1>
        </div>
        <div className="mt-1">
          <div style={{ color: theme.LtextColor }}>
            <ul className="list-disc list-inside">
              <li>Creativity</li>
              <li>Communication</li>
              <li>Collaboration</li>
              <li>Problem-solving</li>
              <li>Proactive</li>
            </ul>
          </div>
        </div>
      </div>

      {/* experience  */}
      <div className="text-sm" >
        <div>
          <h1 className="text-xl font-bold tracking-wide mt-5 ">
            PROFESSIONAL EXPERIENCE
          </h1>
        </div>
        <div>
          {/* company name  */}
          <div className="mt-1">
            <h1 className="text-base font-bold ">Omega HealthCare</h1>
            <h1 className="text-xs font-bold ">
              Accounts Receivable Executive
            </h1>
            <h2 className="text-xs italic" style={{ color: theme.LtextColor }}>
              March, 2021 - May, 2022
            </h2>
          </div>
          {/* responsiblity  */}
          <div className="mt-1">
            <h1 className="text-base font-bold ">Responsibility</h1>
            <ul className="list-disc list-inside" style={{ color: theme.LtextColor }}>
              <li>Managing customer invoices.</li>
              <li>Ensuring timely and accurate payments.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
