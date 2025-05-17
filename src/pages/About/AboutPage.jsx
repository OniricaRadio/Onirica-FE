import { useState } from "react";
import styles from "./AboutPage.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import HeartNav from "../../components/heart/HeartNav";

function AboutPage() {
  return (
    <>
      <Header />
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>About</h1>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.textBlock}>
          <p className={styles.text}>
            ONiriCA comes from the deep wish of making community, the sharing is caring culture and just pure enjoyment of celebrating music and its transcendental nature.
            <br className={styles.gap} />
            It’s intended to be a recreational space, a grounding yet spiralling point and hopefully, a source of discovery for you.
            <br className={styles.gap} />
            The song selection changes every two weeks. You can register to save a song into a personal archive for later reference or you can just stay and enjoy the playlist.
            <br className={styles.gap} />
            If you want to know more about the curator and the project feel free to follow → @lifeafterlove____ or @onirica.flac on instagram.
            <br className={styles.gap} />
            Thank you for coming.
          </p>
        </div>
        <HeartNav/>
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;
