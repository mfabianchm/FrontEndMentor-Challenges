import rulesImage from "../assets/images/image-rules.svg";
import closeBtn from "../assets/images/icon-close.svg";
import styles from "./Modal.module.css";

function Modal({ closeModal }) {
  return (
    <div className={styles.modal}>
      <h1>RULES</h1>
      <img src={rulesImage} alt="rules"></img>
      <button className={styles.closeBtn} onClick={() => closeModal(false)}>
        <img src={closeBtn} alt="close-btn"></img>
      </button>
    </div>
  );
}

export default Modal;
