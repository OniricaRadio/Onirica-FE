import styles from "./ArchivePage.module.css"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import HeartNav from "../../components/heart/HeartNav"

function ArchivePage(){
    return(
        <>
        <Header/>
        <div className={styles.titleContainer}>
            <h1 className={styles.title}>Archive</h1>    
            <p className={styles.nickname}>tylerxdurden</p>
        </div>

        <div>
            
        </div>

        <HeartNav/>
        <Footer/>
        
        </>


    );
}

export default ArchivePage 