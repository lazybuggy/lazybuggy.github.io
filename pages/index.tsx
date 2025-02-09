import styles from "../styles/Home.module.css";
import WordSwitcher from "../components/WordSwitcher";
import { GetStaticProps } from "next";
import Head from "next/head";

export default function Home({ title, description, ...props }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Lucia Okeh</title>
        <meta
          name="description"
          content="Lucia Okeh' space. Lucia is a software engineer based in Toronto, come say hi!"
        ></meta>
        <link rel="shortcut icon" href="/static/luCodes.png" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://luciaokeh.space/" />
        <meta property="og:title" content="Lucia Okeh" />
        <meta
          property="og:description"
          content="Lucia Okeh' space.Lucia is a software engineer based in Toronto, come say hi!"
        />
        <meta property="og:image" content="/static/luArt.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://luciaokeh.space/" />
        <meta property="twitter:title" content="Lucia Okeh" />
        <meta
          property="twitter:description"
          content="Lucia Okeh' space. Lucia is a software engineer based in Toronto, come say hi!"
        />
        <meta property="twitter:image" content="/static/luArt.png"></meta>
      </Head>
      <div className={styles.root}>
        <div className={styles.lucia}>
          <h1>Lucia Okeh</h1>
          <p>The journey is the destination</p>
        </div>
        <div className={styles.socials}>
          <a href="mailto: lucia.okeh@gmail.com" target="_blank">
            <img src="/static/mail.png" />
          </a>
          <a href="https://github.com/lazybuggy/" target="_blank">
            <img src="/static/github.png" />
          </a>
          <a href="https://www.linkedin.com/in/luciaokeh/" target="_blank">
            <img src="/static/linkedin.png" />
          </a>
        </div>
        <div className={styles.content}>
          <div className={styles.introContainer}>
            <h2>Welcome to my space</h2>
            <h3>
              I am a software engineer based in Toronto — currently working @
              honeycomb 🐝🍯
            </h3>
            <div className={styles.intro2}>
              <p>If I'm not coding, im reading.</p>
              <p>
                &amp; if I'm not reading, I'm probably binge watching another
                show. 😜
              </p>
            </div>
            <div className={styles.interests}>
              I like:{" "}
              <WordSwitcher
                interval={3500}
                colour="#81b0a8"
                words={[
                  "travel",
                  "reading",
                  "space",
                  "anime",
                  "coding",
                  "the unknown",
                  "gaming",
                  "quotes",
                  "learning",
                  "..sleeping",
                ]}
              />
            </div>
            <div className={styles.intro3}>
              <p>Currently living & learning 🫶🏽</p>
            </div>
          </div>
          {/* <img src="/static/luArt.png" /> */}
        </div>
        <div className={styles.footer}>
          <div className={styles.quotes}>
            <WordSwitcher
              interval={11000}
              colour="rosybrown"
              words={[
                "the world belongs to the brave",
                "alis grave nil",
                "live for you",
                "you don't know where you're going until you know where you've been",
                "unlimited",
              ]}
            />
          </div>
        </div>
        <img className={styles.backgroundLu} src="/static/luArt.png" />
        <svg className={styles.background} viewBox="0 0 268.47 241.21">
          <path
            d="M318.21 118.26c-2.16 13.11-13.27 47.8-27 69.58-23.44 37.16-56.87 49.16-64.82 44.7-27-15.29 59.53-135.86 91.82-114.28 31.41 21 74.94 82.17 55.49 105-26.3 30.9-137.46-92.78-169-58.57-22.86 24.78 10.63 120.07 29.65 139.16 57.81 58 45.84-90.35 97.1-140 42.17-40.87 133.65 52.82 125.5 75.31-11.13 30.72-181.7-28.24-211.37 25.76-13.48 24.53-2.53 63.56 19.15 77.94 34.94 23.16 39.41-24.67 72.74-68.48 24.49-32.18 92.65-57.14 94.43-76.89"
            transform="translate(-192.97 -111.69)"
            fill="#fff"
            stroke="#d6d0c9"
            strokeMiterlimit="10"
            strokeWidth="8px"
            opacity=".11"
          />
        </svg>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const configData = await import("../siteconfig.json");

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
      image: configData.default.image,
    },
  };
};
