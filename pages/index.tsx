import styles from "../styles/Home.module.css";
import projStyles from "../styles/ProjectCard.module.css";

import { GetStaticProps } from "next";
import Section from "../components/Section";
import Hero from "../components/Hero";
import { Alignment } from "../types";
import Footer from "../components/Footer";
import WordSwitcher from "../components/WordSwitcher";
import ProjectCard from "../components/ProjectCard";
import { Helmet } from "react-helmet";

export default function Home({ title, description, ...props }) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Lucia Okeh</title>
        <meta name="description" content="Lucia Okehs' personal website" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <link rel="image" href="/static/luArt.png" />
      </Helmet>
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
                I am a Toronto based software engineer — currently working
                @jam3.
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
                words={[
                  "travel",
                  "reading",
                  "space",
                  "anime",
                  "coding",
                  "gaming",
                  "quotes",
                  "..sleeping",
                ]}
              />
            </div>
          </div>
        </Section>
        <Section align={Alignment.RIGHT} colour="#897D5E">
          <div className={styles.intro}>
            <h2>Words strung together that I love</h2>
            <ul>
              <li>
                <h4>the world belongs to the brave</h4>
              </li>
              <li>
                <h4>alis grave nil</h4>
              </li>
              <li>
                <h4>the best way to make dreams come true is to wake up</h4>
              </li>
              <li>
                <h4>
                  you don't know where you're going until you know where you've
                  been
                </h4>
              </li>
            </ul>
          </div>
        </Section>
        <div className={projStyles.projectSection}>
          <ProjectCard colour="#9F7474" image="/static/giftedProj.png">
            <h3>
              <a target="_blank" href="https://github.com/lazybuggy/GIFted">
                GIFTED
              </a>
            </h3>
            <p>
              Developed a simple web app which utilized 2 RESTful APIs, Giphy
              for GIFs and OpenWeatherMaps for weather at various locations.
              Allows users to view GIFs related to the current weather at
              certain locations.
            </p>
          </ProjectCard>
          <ProjectCard colour="#A2A071" image="/static/faceoffProj.png">
            <h3>
              <a
                target="_blank"
                href="https://github.com/lazybuggy/FaceOffEmotionApp"
              >
                FaceOff
              </a>
            </h3>
            <p>
              Remember Dance Dance Revolution? This version puts your
              expressions to the test! Introducing FaceOff, a revolutionary game
              for anyone who wants to see how well they can express themselves.
            </p>
          </ProjectCard>
          <ProjectCard image="/static/stbProj.jpeg">
            <h3>
              <a
                target="_blank"
                href="https://github.com/lazybuggy/GameJam2018"
              >
                Secure The Bag
              </a>
            </h3>
            <p>
              6 hours to build a game with the theme 'Freezing'. You're a theif
              and the objective is to make to the end and steal the prize
              without being caught. Goodluck.
            </p>
          </ProjectCard>
          <ProjectCard colour="#555C80" image="/static/fMasterProj.png">
            <h3>
              <a target="_blank" href="https://github.com/lazybuggy/FilmMaster">
                FilmMaster
              </a>
            </h3>
            <p>
              Made with PostgreSQL and Ruby on Rails. This is a movie review
              website that allows for users to sign in, rate and review movies
              as well as view details on each movie.
            </p>
          </ProjectCard>
        </div>
        <Footer />
      </div>
      );
    </>
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
