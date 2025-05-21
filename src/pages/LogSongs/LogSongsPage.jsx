import Footer from "../../components/footer/Footer";
import styles from "./LogSongsPage.module.css"
import HeartNav from "../../components/heart/HeartNav"
import SongForm from "../../components/songForm/SongForm";

function LogSongsPage(){
  return (
    <>
      <div className={styles.infoContainer}>
        <h1 className={styles.title}>Welcome</h1>
        <SongForm className={styles.input}/>
        <HeartNav/>
      </div>
      
     <Footer/>
    </>
   
  );
}

export default LogSongsPage;