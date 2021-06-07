import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chris LoPresto | Engineering leader. Musician.</title>
        <meta name="description" content="Personal website of Chris LoPresto" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Chris LoPresto</h1>

        <p className={styles.description}>
          Thanks for stopping by. Back in the day, websites used to greet readers conversationally. In that spirit,
          hello.
        </p>
      </main>

      <footer className={styles.footer}>
        <span className={styles.logo}>
          <Image src="/signature.svg" alt="Chris LoPresto's signature" width={118} height={40} />
        </span>
      </footer>
    </div>
  );
}
