const API_BASE = "http://localhost:8080/api/songs";

export const createSong = async (songData) => {
  const response = await fetch(API_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(songData),
  });

  if (!response.ok) {
    throw new Error("Failed to create song");
  }

  return response.json();
};

export const getSongs = async () => {
  const response = await fetch(API_BASE);
  return response.json();
};

export const updateSong = async (id, data) => {
  const response = await fetch(`${API_BASE}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to update song");
  }

  return response.json();
};

export const deleteSong = async (id) => {
  const response = await fetch(`${API_BASE}/${id}`, { method: "DELETE" });
  if (!response.ok) throw new Error("Failed to delete song");
};
