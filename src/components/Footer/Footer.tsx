import labels from "../../../public/labels";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>{labels.footer.create}</p>
    </footer>
  );
};

export default Footer;
