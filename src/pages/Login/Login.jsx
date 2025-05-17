import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header"
import Button from "../../components/button/Button";
import styles from "./Login.module.css"
import HeartNav from "../../components/heart/HeartNav"


function LoginPage(){
  return (
    <>
     <Header/>
      <div className={styles.infoContainer}>
        <h1 className={styles.title}>Welcome</h1>
        <p className={styles.text}>if you’re not part of the community yet, click on the spiral below</p>
      </div>
      <Button className={styles.eyeIcon} icon="/public/img/eye.png" alt="Registration icon" />
      <HeartNav/>
     <Footer/>
    </>
   
  );
}

export default LoginPage;