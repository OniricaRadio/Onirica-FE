import { useState } from "react";
import styles from "./SongForm.module.css"; 
import { createSong } from "../../services/SongApi"; 
import Button from "../button/Button";

function SongForm({ onSongCreated }) {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [url, setUrl] = useState("");
  const [validated, setValidated] = useState(false);

  
  const hasScriptTags = (str) => /<\s*script/gi.test(str);


  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (
      !title.trim() ||
      !artist.trim() ||
      !url.trim() ||
      hasScriptTags(title) ||
      hasScriptTags(artist)
    ) {
      alert("Invalid input. Please avoid empty fields or script tags.");
      return;
    }


    const song = { title, artist, url };

    try {
      await createSong(song);
      alert("Song created successfully!");
      onSongCreated && onSongCreated(); 
      setTitle("");
      setArtist("");
      setUrl("");
      setValidated(true);
    } catch (err) {
      alert("Error creating song.");
      console.error(err);
    }
  };

  return (
    <form className={styles.songForm} onSubmit={handleSubmit}>
      <div className={styles.label}>
        <label>Title</label>
        <input
          className={styles.input}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className={styles.label}>
        <label>Artist</label>
        <input
          className={styles.input}
          type="text"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          required
        />
      </div>

      <div className={styles.label}>
        <label>Audio URL</label>
        <input
          className={styles.input}
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          placeholder="/audio/mysong.mp3"
        />
      </div>

      <Button type="submit" className={styles.buttonSave} text="Submit" />
      <Button className={styles.archiveButton} text="Archive" to="/archive" />
    </form>
  );
}

export default SongForm;
