import Link from "next/link";
import styles from "../styles/modules/NavbarLinks.module.css";
import Image from "next/image";
import { useState } from "react";

export default function NavbarLinks({
  jsonObject,
  showLinks,
  styles_area_links,
  unsetShowLinks,
  btn_title,
}) {
  const [leave_nav_top, setOn_leave_nav_top] = useState(false);
  return (
    <>
      <nav className={styles_area_links} style={{ display: showLinks }}>
        {leave_nav_top && (
          <div
            className={styles.leave_nav_top}
            onMouseEnter={() => unsetShowLinks()}
            onMouseOver={() => setOn_leave_nav_top(false)}
          ></div>
        )}
        <div className={styles.nav_top_gap}></div>
        <div
          className={styles.nav_body}
          onMouseEnter={() => setOn_leave_nav_top(true)}
        >
          <h2 className={`${styles.list_header}`}>
            links to the &quot;{btn_title}&quot; pages:
          </h2>
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
        </div>
        <div
          className={styles.leave_nav_bottom}
          onMouseEnter={() => unsetShowLinks()}
          onMouseOver={() => setOn_leave_nav_top(false)}
        ></div>
      </nav>
    </>
  );
}
