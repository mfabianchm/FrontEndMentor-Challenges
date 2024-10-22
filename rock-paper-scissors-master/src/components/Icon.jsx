import styles from "./Icon.module.css";
import { Link } from "react-router-dom";

function Icon({ data, setUserIcon }) {
  const { icon, gradient01, gradient02 } = data;

  const circleStyle = {
    border: `10px solid var(${gradient01})`, // Create the gradient using CSS variables
    borderRadius: "50%",
    boxShadow: `0px 7px 0px -1px var(${gradient02}`,
    background: "white",
    padding: "20px",
    width: "110px",
    height: "110px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  };

  let position = { top: "-40px", left: "0px" };

  if (data.type == "rock") {
    position = { bottom: "-20px", left: "70px" };
  } else if (data.type == "scissors") {
    position = { top: "-40px", left: "160px" };
  }

  const iconStyle = { ...circleStyle, ...position };

  return (
    <Link to={`steps/${data.type}`}>
      <div
        style={iconStyle}
        className={styles.icon}
        onClick={() => setUserIcon(data.type)}
      >
        <img src={data.icon} alt="icon"></img>
      </div>
    </Link>
  );
}

export default Icon;
