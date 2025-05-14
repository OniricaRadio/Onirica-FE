import styles from "./Footer.module.css"
import { Link } from "react-router-dom";

function Footer(){
    return(
        <div className={styles.footerContainer}>
            <Link to="/BookReading" className={styles.link}>
                <p>Book a Tarot + Playlist reading</p>
            </Link>
            <p>ONiriCA Radio</p>
        </div>


    );
}

export default Footer