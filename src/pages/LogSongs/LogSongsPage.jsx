import Footer from "../../components/footer/Footer";
import styles from "./LogSongsPage.module.css"
import HeartNav from "../../components/heart/HeartNav"
import SongForm from "../../components/loginForm/SongForm";

function LogSongsPage(){
  return (
    <>
      <div className={styles.infoContainer}>
        <h1 className={styles.title}>Welcome</h1>
        <SongForm className={styles.input}/>
      </div>
      <HeartNav/>
     <Footer/>
    </>
   
  );
}

export default LogSongsPage;