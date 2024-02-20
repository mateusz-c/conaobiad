import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/logo.svg"
          alt="Co na obiad"
          width={553}
          height={114}
          priority
        />
      </div>

      <Link className={styles.button} href="/generate">
        Generuj
      </Link>
    </main>
  );
}
