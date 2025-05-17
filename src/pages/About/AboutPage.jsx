import styles from "./AboutPage.module.css"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function AboutPage(){
return(
    <>
    <Header/>
    <div className={styles.titleContainer}>
        <h1 className={styles.title}> About </h1>
        <p className={styles.text}>ONiriCA comes from the deep wish of making community, the sharing is caring culture and just pure enjoyment of celebrating music and it’s transcendental nature.
 
    It’s intended to be a recreational space, a grounding yet spiralling point and hopefully, a source of discovery for you. 
 
    The song selection changes every two weeks. You can register to save a song into an personal archive for later reference or you can just stay and enjoy the playlist.
 
    If you want to know more about the curator and the project feel free to follow → @lifeafterlove____ or @onirica.flac on instagram.
 
    Thank you for coming.</p>
    </div>

    <Footer/>
    </>
    

);

}

export default AboutPage;