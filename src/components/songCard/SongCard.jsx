import SongInfo from "../songInfo/SongInfo";
import styles from "./SongCard.module.css";

function SongCard({ song, onDelete, onEdit }) {
  if (!song) return null;

  return (
    <div className={styles.card}>
      <SongInfo song={song} />

      <div className={styles.actions}>
        <button className={styles.editBtn} onClick={onEdit}>
          Edit
        </button>
        <button className={styles.deleteBtn} onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default SongCard;

