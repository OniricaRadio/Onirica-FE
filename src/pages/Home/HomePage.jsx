import { useState, useEffect } from "react";
import styles from "./HomePage.module.css";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

function HomePage() {
    const gifList = [
        "/public/img/Art Fire GIF by Daniel Barreto.gif",
        "/public/img/mirror GIF by ewanjonesmorris.gif",
        "/public/img/Tree Mirror GIF by Blanca Viñas.gif",
        "/public/img/Photography Reflection GIF by John Fogarty.gif",
        "/public/img/sphere.gif",
        "/public/img/spiral.gif",
        "/public/img/spiral3d.gif",
        "/public/img/spiralwater.gif"
    ];

    const [currentGif, setCurrentGif] = useState(gifList[0]);

    useEffect(() => {
        const changeGif = () => {
            const nextGif = gifList[Math.floor(Math.random() * gifList.length)];
            setCurrentGif(nextGif);
        };

        changeGif(); 
        const interval = setInterval(changeGif, 90000); 

        return () => clearInterval(interval); 
    }, []);

    return (
        <>
            <Header />
            <div className={styles.bodyContainer}>
                <img
                    src={currentGif}
                    alt="Background animation"
                    className={styles.backgroundImage}
                />
                <h1 className={styles.title}>ONiriCA</h1>
            </div>
            <Footer />
        </>
    );
}

export default HomePage;
