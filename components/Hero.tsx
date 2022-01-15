import styles from "../styles/Hero.module.css";
// import classnames from 'classnames';
import { HeroType } from "../types/index";
import { FunctionComponent, useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Hero: FunctionComponent<HeroType> = ({
  backgroundImage,
  color,
  children,
}) => {
  // const [index, setIndex] = useState(null);
  // const [innerRef, setInnerRef] = useState(null);
  const index = useRef();
  const innerRef = useRef();
  const contentRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(innerRef.current, {
      width: "100vw",
      height: "100vh",
      scrollTrigger: {
        trigger: index.current,
        start: "top top",
        end: "bottom top-=100px",
        scrub: true,
      },
    });
  }, []);

  return (
    <div
      style={{
        backgroundImage: backgroundImage,
        background: color,
      }}
      className={styles.heroContainer}
      ref={index}
    >
      <div className={styles.inner} ref={innerRef}>
        <div className={styles.heroContent} ref={contentRef}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Hero;
