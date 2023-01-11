import Link from "next/link";
import styles from "../styles/modules/NavbarLinks.module.css";
import Image from "next/image";

export default function NavbarLinks({ jsonObject, classContainer }) {
  return (
    // <nav className={styles.nav_background}>
    <nav className={classContainer}>
      {jsonObject.map((entry) => (
        <div className={`${styles.dropdown}`} key={entry.dirTitle}>
          <button className={`${styles.dropbtn}`}>
            {entry.icon && (
              <Image
                src={entry.icon}
                width={20}
                height={20}
                alt={entry.dirTitle + " logo"}
              />
            )}
            &nbsp;{entry.dirTitle}
          </button>
          <div className={styles.dropdown_content}>
            {entry.links.map((list) => (
              <Link
                href={list.linkHref}
                className={styles.nav_link}
                key={list.id}
              >
                <i className="bi bi-file-earmark-text">
                  &nbsp;{list.linkTitle}
                </i>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
}
