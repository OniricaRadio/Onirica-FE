import styles from "./ButtonSound.module.css";
import playIcon from "../../../public/img/play.png"
import stopIcon from "../../../public/img/stop.png"

const ButtonSound = ({ isPlaying, toggleSound }) => {

  return (
      <button className={styles.button} onClick={toggleSound}>
          <img src={isPlaying ? stopIcon : playIcon} alt="Play/Pause" />
      </button>
  );
};


export default ButtonSound;