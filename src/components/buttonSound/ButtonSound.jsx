import styles from "./ButtonSound.module.css";

const ButtonSound = ({ isPlaying, toggleSound }) => {
  return (
    <button className={styles.button} onClick={toggleSound}>
      {isPlaying ? "Stop" : "Play"}
    </button>
  );
};

export default ButtonSound;