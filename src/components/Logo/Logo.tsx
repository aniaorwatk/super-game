import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.wrapperLogo}>
      <h2 className={styles.superPart}>Super</h2>
      <h2 className={styles.gamePart}>game</h2>
    </div>
  );
};

export default Logo;
