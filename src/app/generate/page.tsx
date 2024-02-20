// import Image from "next/image";
// import Link from 'next/link'
import Image from "next/image";

import styles from "./generate.module.css";

import { getMeals } from "@/helpers/meals";

export default function Generate() {
  const meals = getMeals(7);

  return (
    <main className={styles.main}>
      {meals.map((meal, index) => (
        <a key={index} href={meal.url} className={styles.item} target="_blank">
          <Image
            src={meal.image}
            className={styles.image}
            alt={meal.title}
            width={100}
            height={50}
          />
          {meal.title}
        </a>
      ))}
      {/* <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/logo.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <Link href="/generate">Generuj</Link> */}
    </main>
  );
}
