import styles from "../styles/Nav.module.css";
// import classnames from 'classnames';
import { PaneType } from "../types/index";
import { FunctionComponent, useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
// type Props = {
//     data: WordSwitcherType
// }

// const upArrowClick = () => {
//   console.log("up clicked");
// };

// const downArrowClick = () => {
//   console.log("down clicked");
// };

const Nav = () => {
  //   const [index, setIndex] = useState(0);
  //   const root = useRef(null);
  //   console.log("workingn ", isOpen);
  //   const buttonClass
  //className={classnames({[styles.previousArrow]:true})}
  //   useEffect(() => {
  //     if (isOpen) {
  //       gsap.to(root.current, { duration: 3, x: width });
  //     } else {
  //       gsap.to(root.current, { duration: 3, x: "100%" });
  //     }
  //     // console.log("workingn ", isOpen);
  //   }, [isOpen]);

  return (
    <div className={styles.navRoot}>
      <h4>Me</h4>
      <h4>Projects</h4>
      <h4>Contact Me</h4>
    </div>
  );
};

export default Nav;