import { useState } from "react";
import styles from "./HeartNav.module.css";
import Button from "../button/Button";

function HeartNav() {
  const [showButtons, setShowButtons] = useState(false);

  return (
    <div
      className={styles.heartWrapper}
      onMouseEnter={() => setShowButtons(true)}
      onMouseLeave={() => setShowButtons(false)}
    >
      <img src="/public/img/heart.gif" alt="rotating heart" className={styles.heartGif} />
      {!showButtons && (
        <div className={styles.hoverMessage}>hover me for navigation</div>
      )}

      {showButtons && (
        <div className={styles.hiddenButtons}>
          <Button text="home" to="/home" />
          <Button text="log songs" to="/log" />
          <Button text="curator's picks" to="/picks" />
          <Button text="archive" to="/archive" />

        </div>
      )}
    </div>
  );
}

export default HeartNav;
