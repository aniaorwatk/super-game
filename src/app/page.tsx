import styles from "./page.module.css";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <main className={styles.main}>
      <span className={styles.test}>super game</span>
    </main>
  );
}
