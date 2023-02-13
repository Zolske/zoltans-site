import styles from "../styles/modules/Footer.module.css";

const textJson = require("./footer.json");
const language = "eng"; // must be either "eng" or "de" for the text language (see navbar.json)

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.footer_heading}>
        {textJson[language].title_footer}
      </h2>
      <small>zoltan.the.kepes@gmail.com</small>
      <div className={styles.con_social}>
        <a
          href="https://www.linkedin.com/in/zolt%C3%A1n-kepes-b1922b1bb/?originalSubdomain=uk"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkedin}
          title={textJson[language].linkedin}
          aria-label={textJson[language].linkedin}
        >
          <i className="bi bi-linkedin"></i>
          <p>Linkedin</p>
        </a>
        <a
          href="mailto:zoltan.the.kepes@gmail.com?subject=feedback to Zoltan's Website"
          className={styles.email}
          title={textJson[language].email}
          aria-label={textJson[language].email}
        >
          <i className="bi bi-envelope-at-fill"></i>
          <p>Email</p>
        </a>
        <a
          href="https://github.com/Zolske?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.github}
          title={textJson[language].github}
          aria-label={textJson[language].github}
        >
          <i className="bi bi-github"></i>
          <p>GitHub</p>
        </a>
      </div>
    </footer>
  );
}
