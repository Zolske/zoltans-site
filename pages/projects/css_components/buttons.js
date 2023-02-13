import styles from "../../../styles/modules/ProjectButton.module.css";

export default function buttons({}) {
  return (
    <main>
      <h1>Buttons</h1>

      <div className={styles.body}>
        <a href="#" className={styles.btn_rotate_effect}>
          Hover Me
        </a>
      </div>
    </main>
  );
}
