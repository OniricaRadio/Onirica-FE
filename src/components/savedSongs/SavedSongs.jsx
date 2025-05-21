import { useEffect, useState } from "react";
import SongCard from "../songCard/SongCard";
import EditModal from "../editModal/EditModal";

function SavedSongs() {
  const [savedSongs, setSavedSongs] = useState([]);
  const [editingSong, setEditingSong] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/songs?saved=true")
      .then((res) => res.json())
      .then(setSavedSongs)
      .catch((err) => console.error("Failed to load saved songs:", err));
  }, []);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:8080/api/songs/${id}`, { method: "DELETE" });
    setSavedSongs((prev) => prev.filter((song) => song.id !== id));
  };

  const handleEdit = (song) => {
    setEditingSong(song);
  };

  const saveChanges = async (updatedSong) => {
    await fetch(`http://localhost:8080/api/songs/${updatedSong.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedSong),
    });

    setSavedSongs((prev) =>
      prev.map((s) => (s.id === updatedSong.id ? updatedSong : s))
    );

    setEditingSong(null);
    setMessage("Song updated successfully!");
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div>
      {message && <div className="success">{message}</div>}

      {savedSongs.map((song) => (
        <SongCard
          key={song.id}
          song={song}
          onDelete={() => handleDelete(song.id)}
          onEdit={() => handleEdit(song)}
        />
      ))}

      {editingSong && (
        <EditModal
          song={editingSong}
          onSave={saveChanges}
          onClose={() => setEditingSong(null)}
        />
      )}
    </div>
  );
}

export default SavedSongs;
