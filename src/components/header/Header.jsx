import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import ButtonSound from "../buttonSound/ButtonSound"
import Button from "../button/Button";
import saveIcon from "../../../public/img/starblue.svg"

function Header() {
    return (
    <div className={styles.headerContainer}>
    <div className={styles.textRibbon}>
        <p className={styles.nowPlaying}>Now Playing:</p>
        <div className={styles.playerContainer}>
            <p>rheya - wild nothing </p>
        </div>
     <ButtonSound/>
     <Button icon={saveIcon} alt={ "saveIcon"} className={styles.icon}/>
    </div>    
    </div>
);
}

export default Header;
