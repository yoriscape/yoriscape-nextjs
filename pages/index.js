import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Yoriscape</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello I am <a href="https://nextjs.org">Sukh!!!</a>
        </h1>

        <p className={styles.description}>
          Explore what I Have Made Till Now{' '}
          <code className={styles.code}>Swipe Down</code>
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/yoriscape" className={styles.card}>
            <h2>My GitHub Profile &rarr;</h2>
            <p>Find in-depth information about Projects and What i am still learning.</p>
          </a>
     
          <a href="https://twitter.com/only_yoriichi?t=7rASpzDZtGMKOCcK-7vt4Q&s=09" className={styles.card}>
            <h2>My Twitter Profile &rarr;</h2>
            <p>Most of the tweets i do is useless(i use Twitter only for social knowledge!)</p>
          </a>

          <a
            href="https://www.instagram.com/sukhxhere/"
            className={styles.card}
          >
            <h2>My Instagram Profile &rarr;</h2>
            <p>Discover my shitty face their if you have liked it follow when?</p>
          </a>

          <a
            href="https://t.me/Yoriscape"
            className={styles.card}
          >
            <h2>My Telegram Profile &rarr;</h2>
            <p>
              If need any help I am up 24/7(i feel useless tho)
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
