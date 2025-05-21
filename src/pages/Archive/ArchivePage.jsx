import styles from "./ArchivePage.module.css"
import Footer from "../../components/footer/Footer"
import HeartNav from "../../components/heart/HeartNav"
import SavedSongs from "../../components/savedSongs/SavedSongs"

function ArchivePage(){
    return(
        <>
        
        <div className={styles.titleContainer}>
            <h1 className={styles.title}>Archive</h1>    
            <p className={styles.text}>here you can see the songs you have added!</p>
        </div>
        <div className={styles.archiveContainer}>
        <SavedSongs /> 
        <HeartNav/>
        </div>

       
        <Footer/>
        
        </>


    );
}

export default ArchivePage 