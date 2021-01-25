import styles from "../styles/WordSwitcher.module.css";
// import classnames from 'classnames';
import { WordSwitcherType } from "../types/index";
import { FunctionComponent, useState, useEffect } from "react";
// type Props = {
//     data: WordSwitcherType
// }

// const upArrowClick = () => {
//   console.log("up clicked");
// };

// const downArrowClick = () => {
//   console.log("down clicked");
// };

const WordSwitcher: FunctionComponent<WordSwitcherType> = ({
  words,
  colour,
  autoplay = true,
  interval = 5000,
}) => {
  const [index, setIndex] = useState(0);
  const [optionCount, setOptionCount] = useState(words.length);
  const [word, setWord] = useState(words[0]);

  useEffect(() => {
    if (autoplay) {
      let wordInterval = setInterval(
        () => setIndex((index) => index + 1),
        interval
      );
      return () => clearInterval(wordInterval);
    }
  }, []);
  //   console.log("workingn ", words, colour);
  //   const buttonClass
  //className={classnames({[styles.previousArrow]:true})}
  useEffect(() => {
    if (index >= 0 && index < optionCount) {
      setWord(words[index]);
    } else if (index === optionCount) {
      setWord(words[0]);
      setIndex(0);
    } else if (index < 0) {
      setWord(words[optionCount - 1]);
      setIndex(optionCount - 1);
    }
  }, [index, optionCount]);

  return (
    <div className={styles.container}>
      <button
        className={[styles.previousArrow, styles.arrow].join(" ")}
        style={{ color: colour }}
        onClick={() => setIndex((index) => index - 1)}
      />
      <div className={styles.textContainer}>{word}</div>
      <button
        className={[styles.nextArrow, styles.arrow].join(" ")}
        style={{ color: colour }}
        onClick={() => setIndex((index) => index + 1)}
      />
    </div>
  );
};

export default WordSwitcher;
