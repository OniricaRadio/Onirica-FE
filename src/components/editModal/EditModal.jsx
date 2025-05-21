import { useState, useEffect } from "react";
import styles from "./EditModal.module.css";

function EditModal({ song, onSave, onClose }) {
  if (!song) return null;

  const [title, setTitle] = useState(song.title);
  const [artist, setArtist] = useState(song.artist);
  const [url, setUrl] = useState(song.url || "");

  useEffect(() => {
    setTitle(song.title);
    setArtist(song.artist);
    setUrl(song.url || "");
  }, [song]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedSong = {
      ...song, 
      title,
      artist,
      url,
    };

    onSave(updatedSong);
  };

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modal}>
        <h2>Edit Song</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
          <label>
            Artist:
            <input
              type="text"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
              required
            />
          </label>
          <label>
            URL:
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </label>
          <div className={styles.actions}>
            <button type="submit">Save</button>
            <button type="button" onClick={onClose} className={styles.cancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditModal;

