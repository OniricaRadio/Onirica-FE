import { useState, useEffect } from "react";
import styles from "./HomePage.module.css";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";

function HomePage() {
   const gifList = [
        "/img/ArtFire.gif",
        "/img/heart.gif",
        "/img/mirrorGIFbyewanjonesmorris.gif",
        "/img/Photography.gif",
        "/img/sphere.gif",
        "/img/spiral3d.gif",
        "/img/spiral.gif",
        "/img/spiralwater.gif",
        "/img/TreeMirror.gif"
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