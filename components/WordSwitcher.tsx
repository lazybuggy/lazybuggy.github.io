import styles from "../styles/WordSwitcher.module.css";
import { WordSwitcherType } from "../types/index";
import { FunctionComponent, useState, useEffect } from "react";

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
      {!autoplay && (
        <button
          className={[styles.previousArrow, styles.arrow].join(" ")}
          style={{ color: colour }}
          onClick={() => setIndex((index) => index - 1)}
        />
      )}
      <div className={styles.textContainer}>{word}</div>
      {!autoplay && (
        <button
          className={[styles.nextArrow, styles.arrow].join(" ")}
          style={{ color: colour }}
          onClick={() => setIndex((index) => index + 1)}
        />
      )}
    </div>
  );
};

export default WordSwitcher;
