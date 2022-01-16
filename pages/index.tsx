import Head from "next/head";
import styles from "../styles/Home.module.css";
import projStyles from "../styles/ProjectCard.module.css";

import { GetStaticProps } from "next";
import Section from "../components/Section";
import Hero from "../components/Hero";
import { Alignment } from "../types";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import WordSwitcher from "../components/WordSwitcher";
import { useState, useEffect, useRef } from "react";
import { TweenMax, TweenLite, TimelineMax } from "gsap";
import ProjectCard from "../components/ProjectCard";
// import WordSwitcher from "../components/Pane";
// const luMoon = require("../public/static/luMoon.png");
// import luMoon from "static/luMoon.png";

export default function Home({ title, description, ...props }) {
  // const [aboutOpen, setAboutOpen] = useState(false);
  const [innerRef, setInnerRef] = useState(null);
  // HTML CSS JSResult Skip Results Iframe
  // EDIT ON
  // center elements

  // useEffect(() => {
  //   TweenMax.set(".circlie", {
  //     left: "50%",
  //     top: "50%",
  //     xPercent: -50,
  //     yPercent: -50,
  //     alpha: 0,
  //   });

  // random scale, or I can use cycle here
  // TweenMax.staggerTo(".circlie", 1, {cycle: {scale:[1, .25, .5, .75]}});

  //   var scales = [0.25, 0.5, 0.75, 1];
  //   var colors = ["#f81acc", "#E00E4E", "#5219AA", "#C90D77", "#CF368D"];

  //   TweenLite.set(".circlie", { scale: sample(scales) });

  //   var tl = new TimelineMax({ repeat: -1 });

  //   for (var i = 0; i < 100; i++) {
  //     tl.to(".circlie", 1, {
  //       backgroundColor: sample(colors),
  //       x: random(-100, 100),
  //       y: random(-100, 100),
  //       alpha: random(1, null),
  //       repeat: 1,
  //       repeatDelay: 0.1,
  //       yoyo: true,
  //       // ease: Expo.easeOut,
  //     });
  //   }

  //   function sample(list) {
  //     return function () {
  //       return list[Math.floor(Math.random() * list.length)];
  //     };
  //   }

  //   function random(min, max) {
  //     if (max == null) {
  //       max = min;
  //       min = 0;
  //     }
  //     return function () {
  //       return Math.random() * (max - min) + min;
  //     };
  //   }
  // }, []);

  return (
    <div className={styles.container}>
      <Hero colour="#332421">
        <h1>Lucia Okeh</h1>
        <p>The journey is the destination</p>
      </Hero>
      <Section>
        <div className={styles.intro}>
          <h2>Welcome to my space</h2>
          <div className={styles.introOne}>
            <h3>
              I am a Toronto based software engineer — Currently working @jam3.
            </h3>
          </div>
          <div className={styles.introTwo}>
            <p>If I'm not coding, im reading.</p>
            <p>
              &amp; if I'm not reading, I'm probably binge watching another
              show. 😜
            </p>
          </div>
          <div className={styles.interests}>
            I like:{" "}
            <WordSwitcher
              interval={2000}
              words={["travel", "reading", "space", "anime", "coding", ".."]}
            />
          </div>
        </div>
      </Section>
      <Section align={Alignment.RIGHT} colour="#897D5E">
        <div>roof</div>
      </Section>
      <div className={projStyles.projectSection}>
        <ProjectCard colour="#9F7474" image="/static/giftedProj.png">
          <h3>
            <a>GIFTED</a>
          </h3>
          <p>
            Developed a simple web app which utilized 2 RESTful APIs, Giphy for
            GIFs and OpenWeatherMaps for weather at various locations. Allows
            users to view GIFs related to the current weather at certain
            locations.
          </p>
        </ProjectCard>
        <ProjectCard colour="#A2A071" image="/static/faceoffProj.png">
          <h3>
            <a>boop</a>
          </h3>
          <p>view GIFs related to the current weather at certain locations.</p>
        </ProjectCard>
        <ProjectCard image="/static/stbProj.jpeg">
          <h3>
            <a>boop</a>
          </h3>
          <p>view GIFs related to the current weather at certain locations.</p>
        </ProjectCard>
        <ProjectCard colour="#555C80" image="/static/fMasterProj.png">
          <h3>
            <a>boop</a>
          </h3>
          <p>view GIFs related to the current weather at certain locations.</p>
        </ProjectCard>
      </div>
      <Footer />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const configData = await import("../siteconfig.json");

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  };
};
