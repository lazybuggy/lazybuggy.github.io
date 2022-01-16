import styles from "../styles/ProjectCard.module.css";
import { ProejctType } from "../types/index";
import { FunctionComponent, useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const ProjectCard: FunctionComponent<ProejctType> = ({
  colour,
  image,
  children,
}) => {
  const backgroundRef = useRef();
  const contentRef = useRef();
  const [isHovering, setIsHovering] = useState(false);
  useEffect(() => {
    gsap.to(backgroundRef.current, {
      width: isHovering ? "500px" : "100%",
      zIndex: isHovering ? "3" : "1",
    });
    gsap.to(contentRef.current, {
      zIndex: isHovering ? "4" : "1",
    });
  }, [isHovering]);

  return (
    <div
      className={styles.root}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        ref={backgroundRef}
        className={styles.background}
        style={{
          backgroundColor: colour,
        }}
      >
        <div className={styles.info}>{children}</div>
      </div>
      <div
        className={styles.content}
        ref={contentRef}
        style={{
          backgroundImage: "url(" + image + ")",
        }}
      />
    </div>
  );
};

export default ProjectCard;
