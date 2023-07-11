import Logo from "./../Logo/Logo";
import ThemeButton from "../ThemeButton/ThemeButton";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <ThemeButton />
    </header>
  );
};

export default Header;
