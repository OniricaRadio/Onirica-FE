import { useState } from "react";
import "./SongForm.module.css"; 
import { createSong } from "../../services/songApi"; 

function SongForm({ onSongCreated }) {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [url, setUrl] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const song = { title, artist, url, coverUrl };

    try {
      await createSong(song);
      alert("Song created successfully!");
      onSongCreated && onSongCreated(); // Optional callback to refresh song list
      setTitle("");
      setArtist("");
      setUrl("");
      setCoverUrl("");
      setValidated(true);
    } catch (err) {
      alert("Error creating song.");
      console.error(err);
    }
  };

  return (
    <form className="song-form" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label>Artist</label>
        <input
          type="text"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label>Audio URL</label>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label>Cover URL</label>
        <input
          type="text"
          value={coverUrl}
          onChange={(e) => setCoverUrl(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-success">
        Save Song
      </button>
    </form>
  );
}

export default SongForm;
