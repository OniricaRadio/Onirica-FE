import { useState, useEffect } from "react";
import styles from "./HomePage.module.css";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Button from "../../components/button/Button";

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
    const [showButtons, setShowButtons] = useState(false);

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
            <div className={styles.pageWrapper}>
            <div className={styles.bodyContainer}>
                <img
                    src={currentGif}
                    alt="Background animation"
                    className={styles.backgroundImage}
                />
                <div 
                  className={styles.titleWrapper}
                  onMouseEnter={() => setShowButtons(true)}
                  onMouseLeave={() => setShowButtons(false)}
                >
                    <h1 className={styles.title}>ONiriCA</h1>

                    {showButtons && (
                        <div className={styles.hiddenButtons}>
                            <Button 
                                type="button"
                                className={styles.aboutButton}
                                text="about"
                                to="/about"
                            />
                            <Button 
                                type="button"
                                className={styles.loginButton}
                                text="log songs"
                                to="/log"
                            />
                            <Button 
                                type="button"
                                className={styles.curatorButton}
                                text="curator's picks"
                                to="/picks"
                            />
                        </div>
                    )}
                </div>
            </div>
            </div>
            <Footer />
        </>
    );
}

export default HomePage;