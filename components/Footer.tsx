import styles from "../styles/Footer.module.css";
import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerLeft}>
        <h2>Lucia Okeh</h2>
        <div>
          <p>
            Who knows where life will take you. The road is long and in the end,
            the journey is the destination
          </p>
          <p>— OTH</p>
        </div>
      </div>
      <div className={styles.footerRight}>
        <p>
          <a href="mailto: lucia.okeh@gmail.com" target="_blank">
            lucia.okeh @ gmail dot com
          </a>
        </p>
        <p>
          <a href="https://github.com/lazybuggy/" target="_blank">
            github.com/lazybuggy
          </a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/luciaokeh/" target="_blank">
            linkedin.com/in/luciaokeh
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
