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
          <Button className={styles.homeButton} text="home" to="/" />
          <Button className={styles.loginButton} text="login" to="/login" />
          <Button className={styles.loginButton} text="curator's picks" to="/picks" />

        </div>
      )}
    </div>
  );
}

export default HeartNav;
