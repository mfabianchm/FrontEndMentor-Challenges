import styles from "./OverviewCard.module.css";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function OverviewCard({ data }) {
  const { isLightTheme } = useContext(ThemeContext);

  const percentageColorStyle = {
    color: `var(${data.overviewPercentageColor})`,
  };

  return (
    <div
      className={`${styles.overviewCard} ${
        isLightTheme ? styles.overviewCardLight : styles.overviewCardDark
      }`}
    >
      <div className={styles.firstContainer}>
        <span className={styles.dataType}>{data.overviewType}</span>
        <img src={data.overviewImage} alt="social-media-img"></img>
      </div>
      <div className={styles.secondContainer}>
        <span
          className={`${styles.overviewNumber} ${
            isLightTheme
              ? styles.overviewNumberLight
              : styles.overviewNumberDark
          }`}
        >
          {data.overviewNumber}
        </span>
        <span className={styles.percentage}>
          <img src={data.overviewArrowIcon} alt="arrow-icon"></img>
          <span
            className={styles.overviewPercentage}
            style={percentageColorStyle}
          >
            {data.overviewPercentage + "%"}
          </span>
        </span>
      </div>
    </div>
  );
}

export default OverviewCard;
