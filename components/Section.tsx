import styles from "../styles/Section.module.css";
// import classnames from 'classnames';
import { Alignment, SectionType } from "../types/index";
import { FunctionComponent, useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import WordSwitcher from "./WordSwitcher";

// type Props = {
//     data: WordSwitcherType
// }

// const upArrowClick = () => {
//   console.log("up clicked");
// };

// const downArrowClick = () => {
//   console.log("down clicked");
// };

const Section: FunctionComponent<SectionType> = ({
  backgroundImage,
  colour,
  align,
  children,
}) => {
  // const [index, setIndex] = useState(null);
  // const [innerRef, setInnerRef] = useState(null);
  const index = useRef();
  const innerRef = useRef();

  const contentRef = useRef(null);

  // const scrollE = (e) => {
  //   console.log("ooo");
  // };
  // useEffect(() => {
  // gsap.registerPlugin(ScrollTrigger);
  // }, []);

  // useEffect(() => {
  //   gsap.to(innerRef.current, {
  //     width: "100vw",
  //     height: "100vh",
  //     scrollTrigger: {
  //       trigger: index.current,
  //       start: "top top",
  //       end: "bottom top-=100px",
  //       scrub: true,
  //     },
  //   });

  // if (fade) {
  //   gsap.set(contentRef.current, {
  //     opacity: 0,
  //   });
  //   gsap.to(contentRef.current, {
  //     opacity: 1,
  //     scrollTrigger: {
  //       trigger: index.current,
  //       start: "top top",
  //       end: "bottom bottom-=70px",
  //       scrub: true,
  //     },
  //   });
  // }
  // console.log("bleh");
  // const scrollE = (e) => {
  //   console.log("ooo", index);
  // };
  // window.addEventListener("scroll", scrollE);
  // }, []);

  return (
    <div className={styles.sectionContainer} ref={index}>
      <div
        className={[
          styles.inner,
          align === Alignment.RIGHT && styles.right,
        ].join(" ")}
        ref={innerRef}
        style={{
          backgroundImage: backgroundImage,
          background: colour,
        }}
      >
        <div className={styles.sectionContent} ref={contentRef}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Section;
