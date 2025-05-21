import SongInfo from "../songInfo/SongInfo";
import styles from "./SongCard.module.css";
import Button from "../button/Button"
import trashBanana from "../../../public/img/delete.svg"

function SongCard({ song, onDelete, onEdit }) {
  if (!song) return null;

  return (
    <div className={styles.card}>
      <SongInfo song={song} />

      <div className={styles.actions}>
        <button className={styles.editBtn} onClick={onEdit}>
          Edit
        </button>
        
        <Button
        className={styles.deleteBtn}
        type="button"
        text="Delete"
        icon={trashBanana}
        alt="Delete icon"
        onClick={onDelete}
        />
        
        
      </div>
    </div>
  );
}

export default SongCard;

