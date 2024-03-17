import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Link className={styles.mainBtn} href={"/games"}>
        Show all games
      </Link>
    </main>
  );
}
