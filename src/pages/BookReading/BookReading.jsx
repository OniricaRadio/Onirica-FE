import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import HeartNav from "../../components/heart/HeartNav";
import styles from "./BookReading.module.css"

function BookReading(){
    return (
        <>
        <Header/>
        <div className={styles.titleContainer}>
        <h1 className={styles.title}>Book a reading </h1>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.textBlock}>
          <p className={styles.text}>
          Get a playlist curated accordingly to your tarot reading! 
            If you are interested please reach out with your inquiry to this email: hola.onirica@gmail.com. 
            Dreams and other specifics are welcome. Please include “ Tarot + playlist + your name” in the about section. 
            <p className={styles.text} />
            I’ll be getting back to you with the follow ups.
            <p className={styles.text} />
            Thank you for being here.
          </p>
        </div>
        <HeartNav/>
      </div>
        <Footer/>
        </>

    );
}

export default BookReading