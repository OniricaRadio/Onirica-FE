import { useEffect, useState } from "react";
import styles from "./SongInfo.module.css";

function SongInfo() {
  const [songs, setSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  useEffect(() => {
    // Fetch songs from backend API
    fetch("http://localhost:8080/api/songs")
      .then((res) => res.json())
      .then((data) => setSongs(data))
      .catch((err) => console.error("Failed to load songs:", err));
  }, []);

  if (!songs.length) return <p>Loading songs...</p>;

  const currentSong = songs[currentSongIndex];

  return (
    <section className={styles.songContainer}>
      {/* Optional: display cover if you add that later */}
      {/* <img className={styles.songImg} src={`http://localhost:8080${currentSong.coverUrl}`} alt={currentSong.title} /> */}
      <h1 className={styles.songTitle}>{currentSong.title}</h1>
      <p className={styles.songArtist}>{currentSong.artist}</p>
      <audio controls autoPlay src={`http://localhost:8080${currentSong.url}`} />
    </section>
  );
}

export default SongInfo;
