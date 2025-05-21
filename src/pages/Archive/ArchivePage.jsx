import styles from "./ArchivePage.module.css"
import Footer from "../../components/footer/Footer"
import HeartNav from "../../components/heart/HeartNav"
import SavedSongs from "../../components/savedSongs/SavedSongs"

function ArchivePage(){
    return(
        <>
        
        <div className={styles.titleContainer}>
            <h1 className={styles.title}>Archive</h1>    
            <p className={styles.nickname}>here you can see the songs you have saved!</p>
        </div>
        <div>
        <SavedSongs /> 
        </div>

        <HeartNav/>
        <Footer/>
        
        </>


    );
}

export default ArchivePage 