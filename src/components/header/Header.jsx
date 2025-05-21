import { useRef, useState, useEffect } from "react";
import styles from "./Header.module.css";
import ButtonSound from "../buttonSound/ButtonSound";
import SongInfo from "../songInfo/SongInfo";

function Header() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songs, setSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8080/api/songs")
      .then((res) => res.json())
      .then((data) => {
        console.log("Songs fetched:", data); 
        setSongs(data);
      })
      .catch((err) => console.error("Failed to fetch songs:", err));
  }, []);
  
  useEffect(() => {
    if (!audioRef.current) return;
  
    audioRef.current.load(); 
    audioRef.current.play().catch((err) => {
      console.error("Playback failed:", err);
    });
  
    setIsPlaying(true);
  }, [currentSongIndex]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((err) => console.error("Playback failed:", err));
    }
    setIsPlaying(!isPlaying);
  };

  
  const handleEnded = () => {
    if (songs.length <= 1) return;
  
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * songs.length);
    } while (nextIndex === currentSongIndex);
  
    setCurrentSongIndex(nextIndex);
  };

  if (songs.length === 0) return <p>Loading songs...</p>;

  let currentSong = songs[currentSongIndex];
  let audioSrc = `http://localhost:8080${currentSong.url}`;
  

  return (
    <div className={styles.headerContainer}>
      <div className={styles.textRibbon}>
        <p className={styles.nowPlaying}>now playing:</p>
        <div className={styles.playerContainer}>
          <SongInfo song={currentSong} />
        </div>
        <div className={styles.buttonPlay}>
        <ButtonSound isPlaying={isPlaying} toggleSound={togglePlay} />
        </div>
        <audio
          ref={audioRef}
          src={audioSrc}
          preload="auto"
          onEnded={handleEnded}
        />
      </div>
    </div>
  );
}

export default Header;
