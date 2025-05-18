import { useRef, useState, useEffect } from "react";
import styles from "./Header.module.css";
import ButtonSound from "../buttonSound/ButtonSound"
import Button from "../button/Button";
import saveIcon from "../../../public/img/starblue.svg"
import SongInfo from "../songInfo/SongInfo";


function Header() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [songs, setSongs] = useState([]);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (!audio) return;
    
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play().catch((err) => {
                console.error("Playback failed:", err);
            });
        }
    
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        fetch("http://localhost:8080/api/songs")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSongs(data);  // Now use it in state
            });
    }, []);

    return (
    <div className={styles.headerContainer}>
    <div className={styles.textRibbon}>
        <p className={styles.nowPlaying}>Now Playing:</p>
        <div className={styles.playerContainer}>
            <SongInfo/>
        </div>
        <ButtonSound isPlaying={isPlaying} toggleSound={togglePlay} />
     <Button icon={saveIcon} alt={ "saveIcon"} className={styles.saveIcon}/>
     <audio ref={audioRef} src={songs[0]?.url} preload="auto" />
     {songs.length > 0 && (
  <audio
    ref={audioRef}
    src={`http://localhost:8080${songs[0].url}`}
    preload="auto"
  />
)}
    </div>    
    </div>
);
}

export default Header;
