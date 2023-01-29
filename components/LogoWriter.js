import { useState, useEffect, useRef } from "react";
import styles from "../styles/modules/LogoWriter.module.css";

export default function LogoWriter({ logo_1, logo_2, logo_3 }) {
  const [logo_text_1, setLogo_text_1] = useState("");
  const [logo_text_2, setLogo_text_2] = useState("");
  const [logo_text_3, setLogo_text_3] = useState("");
  const [curser_1, setCurser_1] = useState("");
  const [curser_2, setCurser_2] = useState("");
  const [curser_3, setCurser_3] = useState("");
  const index_1 = useRef(0);
  const index_2 = useRef(0);
  const index_3 = useRef(0);

  useEffect(() => {
    if (index_1.current < logo_1.length) {
      setCurser_1("|");
      const timeOutId = setTimeout(() => {
        let temp = logo_text_1 + logo_1.charAt(index_1.current);
        setLogo_text_1(temp);
        index_1.current += 1;
      }, 100);
      return () => {
        clearTimeout(timeOutId);
      };
    }
    if (index_1.current === logo_1.length) {
      if (index_2.current < logo_2.length) {
        setCurser_1("");
        setCurser_2("|");
      }
      setTimeout(() => {
        let temp_2 = logo_text_2 + logo_2.charAt(index_2.current);
        setLogo_text_2(temp_2);
        index_2.current += 1;
      }, 100);
    }
    if (index_2.current === logo_2.length) {
      if (index_3.current < logo_3.length) {
        setCurser_2("");
        setCurser_3("|");
      }
      setTimeout(() => {
        let temp_3 = logo_text_3 + logo_3.charAt(index_3.current);
        setLogo_text_3(temp_3);
        index_3.current += 1;
      }, 100);
    }
    if (index_3.current === logo_3.length) {
      setCurser_3("");
    }
  }, [logo_1, logo_text_1, logo_2, logo_text_2, logo_3, logo_text_3]);

  return (
    <main>
      <span className={styles.logo_1}>{logo_text_1}</span>
      <span>{curser_1}</span>
      <span className={styles.logo_2}>{logo_text_2}</span>
      <span>{curser_2}</span>
      <span className={styles.logo_3}>{logo_text_3}</span>
      <span>{curser_3}</span>
    </main>
  );
}
