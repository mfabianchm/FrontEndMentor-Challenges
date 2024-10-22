import styles from "./IconStep02.module.css";

function IconStep02({ icon, text }) {
  const circleStyle = {
    border: `10px solid var(${icon.gradient01})`,
    borderRadius: "50%",
    boxShadow: `0px 7px 0px -1px var(${icon.gradient02}`,
    background: "white",
    padding: "20px",
    width: "110px",
    height: "110px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className={styles.icon}>
      <div style={circleStyle}>
        <img src={icon.icon} alt="icon"></img>
      </div>
      <p>{text}</p>
    </div>
  );
}

export default IconStep02;
