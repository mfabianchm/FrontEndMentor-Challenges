import { useState, useEffect } from "react";
import "./App.css";
import data from "./data";

import Score from "./components/Score";
import Icon from "./components/Icon";
import Modal from "./components/Modal";

import { Outlet } from "react-router-dom";

function App() {
  const [score, setScore] = useState(12);
  const [userIcon, setUserIcon] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="app-container">
      {isModalOpen && <div className="modal-overlay"></div>}
      {isModalOpen && <Modal closeModal={setModalOpen}></Modal>}
      <Score score={score}></Score>
      <Outlet />
      {!userIcon && (
        <div className="icons">
          <div className="icons-img-container">
            {data.map((data) => (
              <Icon
                data={data}
                key={data.type}
                setUserIcon={setUserIcon}
              ></Icon>
            ))}
          </div>
        </div>
      )}

      <button className="rules-button" onClick={() => setModalOpen(true)}>
        RULES
      </button>
    </div>
  );
}

export default App;
