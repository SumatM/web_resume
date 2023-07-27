"use client";
import { useState } from "react";
import styles from "./ToggleComponent.module.css";
import { AiFillDownCircle, AiFillUpCircle } from "react-icons/ai";
import { useSelector } from "react-redux";

let iconColor = "#DCE775";

const ToggleComponent = ( { heading, val }) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useSelector((s) => s.themeReducer.value);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        <div className="text-sm font-bold flex">
          <div className="pr-2">
            {!isOpen ? (
              <AiFillDownCircle color={theme.iconColor} size="20px" />
            ) : (
              <AiFillUpCircle  color={theme.iconColor} size="20px" />
            )}{" "}
          </div>

          <p>{heading}</p>
        </div>
      </button>
      <div className={`${isOpen ? styles.open : styles.closed}`}>
        <div>
          <ul className="list-disc list-inside text-sm pl-8">
            {val?.map((item,i)=>{
                return <li key={i}>{item}</li>
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ToggleComponent;
