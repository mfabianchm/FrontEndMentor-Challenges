import styles from "./Step02.module.css";
import { useLoaderData } from "react-router-dom";
import { getIcon } from "../data";
import { useState, useEffect } from "react";

import { getRandomIcon } from "../data";

import IconStep02 from "./IconStep02";

export async function loader({ params }) {
  const icon = await getIcon(params.icon);
  return { icon };
}

function Step02() {
  const { icon } = useLoaderData();
  const [computerIcon, setComputerIcon] = useState(null);
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (count > 0) {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [count]);

  useEffect(() => {
    if (icon == null) {
      return;
    }
    const randomIcon = getRandomIcon(icon.type);
    setComputerIcon(randomIcon);
  }, []);

  return (
    <div className={styles.step02}>
      <div className={styles.chosenOptions}>
        <IconStep02 icon={icon} text={"YOU PICKED"}></IconStep02>
        {computerIcon && (
          <IconStep02
            icon={computerIcon}
            text={"THE HOUSE PICKED"}
          ></IconStep02>
        )}
      </div>
      <h1>WINNER IS...</h1>
      <span>{count}</span>
    </div>
  );
}

export default Step02;
