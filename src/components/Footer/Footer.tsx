"use client";

import { useMainContext } from "@/providers/MainProvider";
import styles from "./Footer.module.css";

const Footer = () => {
  const { name } = useMainContext();
  return <footer className={styles.footer}>footer {name}</footer>;
};

export default Footer;
