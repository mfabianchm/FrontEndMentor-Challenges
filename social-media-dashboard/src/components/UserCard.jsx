import styles from "./UserCard.module.css";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function UserCard({ user }) {
  const { isLightTheme } = useContext(ThemeContext);

  let borderGradient = {
    borderTop: `3px solid var(${user.topGradient})`,
  };

  const newFollowersStyle = {
    color: `var(${user.followersColor})`,
  };

  if (user.social === "Instagram") {
    borderGradient = {
      borderTop: "3px solid",
      borderImage:
        "linear-gradient(to right, var(--Instagram-gradient01), var(--Instagram-gradient02)) 1",
    };
  }

  return (
    <div
      className={`${styles.userCardContainer} ${
        isLightTheme
          ? styles.userCardContainerLight
          : styles.userCardContainerDark
      }`}
      style={borderGradient}
    >
      <img src={user.image} alt="logo-icon"></img>
      <span className={styles.username}>{user.username}</span>
      <p
        className={`${styles.followersNumber} ${
          isLightTheme
            ? styles.followersNumberLight
            : styles.followersNumberDark
        }`}
      >
        {user.followers}
      </p>
      <p className={styles.followersText}>FOLLOWERS</p>
      <span className={styles.newFollowersContainer}>
        <img src={user.arrowIcon} alt="arrow-img"></img>
        <span style={newFollowersStyle} className={styles.newFollowers}>
          {user.newFollowers + " Today"}
        </span>
      </span>
    </div>
  );
}

export default UserCard;
