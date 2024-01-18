import styles from './Footer.module.css';
import React from 'react';
import { ReactComponent as Logo } from "../../Resources/image/logo.svg";
import { ReactComponent as AppStore } from "../../Resources/image/appstorebadge.svg";

const Footer = props => {
    const {
        
    } = props;

    return (
        <div className={styles.footer}>
            <div className={styles.footerTop}>
                <Logo className={styles.logo} />
                <h2>Video juegos</h2>
            </div>
            <div className={styles.sections}>
              <div className={`${styles.section} ${styles.section1}`}>
                <h3 className={styles.first}>Compañia</h3>
                <h3>Sobre Nosotors</h3>
              </div>
              <div className={`${styles.section} ${styles.section2}`}>
                <h3 className={styles.first}>Consoles</h3>
                <h3>Playstation 5</h3>
                <h3>Xbox One</h3>
                <h3>Switch</h3>
              </div>
              <div className={`${styles.section} ${styles.section3}`}>
                <h3 className={styles.first}>Resources</h3>
                <h3>Pregunta Frecuente</h3>
                <h3>Contacto</h3>
              </div>
              <div className={`${styles.section} ${styles.section4}`}>
                <h3 className={styles.first}>Ayuda por producto</h3>
                <h3>Soporte</h3>
              </div>
            </div>
    
            <div className={styles.footerInfo}>
              <div className={styles.infoLeft}>
                <p>Echo por Adrian Pico React.</p>
              </div>
              <div className={styles.infoRight}>
                <img className={styles.google} src={require("../../Resources/image/googleplaybadge.png")} alt="Google Play Badge" />
                <AppStore className={styles.apple} />
              </div>
            </div>
    
            <div className={styles.footerEnd}>
              <div className={styles.endLeft}>
                <h4>Privacidad</h4>
                <h4>Securidad</h4>
                <h4>Cookies</h4>
                <h4>Legal</h4>
              </div>
    
              <div className={styles.endRight}>
                <img className={styles.social} src={require("../../Resources/image/twitter.png")} alt="Twitter Logo" />
                <img className={styles.social} src={require("../../Resources/image/instagram.png")} alt="Instagram Logo" />
              </div>
            </div>
        </div>
    );
  }
  
  export default Footer;