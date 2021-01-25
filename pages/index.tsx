import Head from "next/head";
import styles from "../styles/Home.module.css";
import { GetStaticProps } from "next";
import WordSwitcher from "../components/WordSwitcher";

export default function Home({ title, description, ...props }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/static/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&family=Cormorant+Upright:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.twinklingStars} />
      <div className={styles.cloud} />

      <main className={styles.main}>
        <h1 className={styles.name}>LUCIA OKEH</h1>
        <WordSwitcher
          words={["red", "blue", "gray"]}
          colour="#9ecbd9"
          autoplay={false}
        />
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
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
