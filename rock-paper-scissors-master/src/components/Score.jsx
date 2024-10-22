import styles from "./Score.module.css";

function Score({ score }) {
  return (
    <div className={styles.scoreContainer}>
      <h1 className={styles.title}>
        <span style={{ display: "block" }}>ROCK</span>
        <span style={{ display: "block" }}>PAPER</span>
        <span style={{ display: "block" }}>SCISSORS</span>
      </h1>
      <div className={styles.score}>
        <p className={styles.scoreTitle}>SCORE</p>
        <span className={styles.scoreNumber}>{score}</span>
      </div>
    </div>
  );
}

export default Score;
