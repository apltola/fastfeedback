import Head from 'next/head';
import { useAuth } from '../lib/auth';
import styles from '../styles/Home.module.css';

export default function Home() {
  const auth = useAuth();
  console.log('jee');

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <i>Fast Feedback</i>
        </h1>

        <div>
          <p className={styles.code}>
            auth: {JSON.stringify(auth.user ? auth.user.email : null, null, 2)}
          </p>
          <button onClick={() => auth.signinWithGithub()}>
            sign in with github
          </button>
          <button onClick={() => auth.signout()}>logout</button>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
