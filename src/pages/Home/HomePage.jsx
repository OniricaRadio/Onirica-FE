import styles from "./HomePage.module.css"
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

function HomePage() {
    return (
        <div className={styles.bodyContainer}>
            <Header />
            <Footer/>
        </div>
    );
}

export default HomePage
