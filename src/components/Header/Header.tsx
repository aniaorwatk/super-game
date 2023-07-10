"use client";

import { useMainContext } from "@/providers/MainProvider";
import { useEffect } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const { setName } = useMainContext();

  useEffect(() => {
    setName("ania");
  }, [setName]);

  return <header className={styles.header}>header</header>;
};

export default Header;
