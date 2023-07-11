"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaSun } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";
import labels from "../../../public/labels";
import styles from "./ThemeButton.module.css";

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button className={styles.buttonTheme}>
        <FaSun /> / <BsFillMoonStarsFill />
      </button>
    );
  }

  return (
    <button
      className={styles.buttonTheme}
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <>
          {labels.themeButton.light} <FaSun />
        </>
      ) : (
        <>
          {labels.themeButton.dark} <BsFillMoonStarsFill />
        </>
      )}
    </button>
  );
};

export default ThemeButton;
