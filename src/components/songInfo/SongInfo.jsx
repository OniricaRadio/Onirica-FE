import styles from "./SongInfo.module.css";

function SongInfo({ song }) {
  if (!song) return null;

  return (
    <section className={styles.songContainer}>
      <h1 className={styles.songTitle}>{song.title}</h1>
      <p className={styles.songArtist}>{song.artist}</p>
    </section>
  );
}

export default SongInfo;
