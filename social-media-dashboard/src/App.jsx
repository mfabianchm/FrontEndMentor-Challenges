import "./App.css";
import "react-toggle/style.css";
import { usersInfo, overviewUserInfo } from "./data/mock-data";

import { useContext } from "react";
import Toggle from "react-toggle";
import UserCard from "./components/UserCard";
import OverviewCard from "./components/OverviewCard";

import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { isLightTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div className="main-header-container">
        <div className="header">
          <h1
            className={`header-text ${
              isLightTheme ? "header-text-light" : "header-text-dark"
            }`}
          >
            Social Media Dashboard
          </h1>
          <p className="total-followers-text">Total Followers: 23,004</p>
        </div>
        <div className="light-dark-modes">
          <p className="style-mode">Dark Mode</p>
          <Toggle
            defaultChecked={isLightTheme}
            icons={false}
            onChange={toggleTheme}
            className="custom-toggle-class"
          />
        </div>
      </div>
      <div className="user-card-main-container">
        {usersInfo.map((user) => (
          <UserCard user={user} key={user.id}></UserCard>
        ))}
      </div>

      <h2
        className={`header-text ${
          isLightTheme ? "header-text-light" : "header-text-dark"
        }`}
      >
        Overview - Today
      </h2>
      <div className="overview-cards-container">
        {overviewUserInfo.map((data) => (
          <OverviewCard data={data} key={data.id}></OverviewCard>
        ))}
      </div>
    </>
  );
}

export default App;
