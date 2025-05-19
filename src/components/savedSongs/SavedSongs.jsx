import styles from "./SavedSongs.module.css"
import SongInfo from "../../components/songInfo/SongInfo"



function SavedSongs(){
    const songs = Array.from({ length: 7 });

    return (
      <ul>
        <li>
          {songs.map((_, index) => (
            <SongInfo key={index} />
          ))}
        </li>
      </ul>
    );
}

export default SavedSongs