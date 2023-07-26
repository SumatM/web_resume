import { AiFillMail } from "react-icons/ai";
import {BiSolidPhoneCall} from "react-icons/bi"
import {MdLocationPin} from 'react-icons/md'
import {IoLogoLinkedin} from 'react-icons/io'
import {BsGithub} from 'react-icons/bs'
import {IoIosHelpBuoy} from 'react-icons/io'
import styles from './left.module.css'


let iconColor = "#8BC34A";
let textColor = "#827717";
const boxShadowColor = "#DCE775"
const animationStyle = `yellow-animation`

const Left = () => {
  return (
    <div className=" basis-1/2   text-left">
    <div className={styles[`${animationStyle}`]}></div>
      {/* dp  */}
      <div
       className={styles.changeColor}
        style={{ boxShadow: `20px -20px ${boxShadowColor}`, position: "relative" ,width:'80%'}}
      >
        <img
          src="/dp.png"
          alt="sumat"
          className="object-contain"
          
        />
      </div>
      {/* name & title  */}
      <div className="mt-2">
        <h1 className="text-4xl font-bold tracking-wide">SUMAT MALLICK</h1>

        <h1 className={`text-md font-bold tracking-wide mt-5 `} style={{color:textColor}}>
          Full Stack Web Developer
        </h1>
      </div>

      {/* basic info  */}
      <div>
      <div className="flex items-center mt-8">
        <div className="p-2">
          <AiFillMail style={{ color: iconColor }} />
        </div>
        <div className="p-2" style={{color:textColor}}>
          <p>Sumatmallick@gmail.com</p>
        </div>
      </div>
      {/* mobile */}
      <div className="flex items-center mt-0">
        <div className="p-2">
          <BiSolidPhoneCall size='1.1rem' style={{ color: iconColor }} />
        </div>
        <div className="p-2" style={{color:textColor}}>
          <p>+91-889447615</p>
        </div>
      </div>
      {/* address  */}
      <div className="flex items-center mt-0">
        <div className="p-2">
          <MdLocationPin size='1.2rem' style={{ color: iconColor }} />
        </div>
        <div className="p-2" style={{color:textColor}}>
          <p>Kendrapara, Odisha</p>
        </div>
      </div>
        {/* linkedin */}
        <div className="flex items-center mt-0">
        <div className="p-2">
          <IoLogoLinkedin size="1.2rem" style={{ color: iconColor }} />
        </div>
        <div className="p-2" style={{color:textColor}}>
          <p>Sumat Mallick</p>
        </div>
      </div>
        {/* github */}
        <div className="flex items-center mt-0">
        <div className="p-2">
          <BsGithub size="1rem" style={{ color: iconColor }} />
        </div>
        <div className="p-2" style={{color:textColor}}>
          <p>SumatM</p>
        </div>
      </div>
        {/* portfolio */}
        <div className="flex items-center mt-0">
        <div className="p-2">
          <IoIosHelpBuoy size="1.1rem" style={{ color: iconColor }} />
        </div>
        <div className="p-2" style={{color:textColor}}>
          <p>Sumat Mallick</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Left;
