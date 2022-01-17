import styles from "../styles/Section.module.css";
import { Alignment, SectionType } from "../types/index";
import { FunctionComponent } from "react";

const Section: FunctionComponent<SectionType> = ({
  backgroundImage,
  colour,
  align,
  children,
}) => {
  return (
    <div className={styles.sectionContainer}>
      <div
        className={[
          styles.inner,
          align === Alignment.RIGHT && styles.right,
        ].join(" ")}
        style={{
          backgroundImage: backgroundImage,
          background: colour,
        }}
      >
        <div className={styles.sectionContent}>{children}</div>
      </div>
    </div>
  );
};

export default Section;
