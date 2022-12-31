import styles from "../styles/modules/Navbar.module.css";
import { useState } from "react";
import Image from "next/image";
import profilePicture from "../assets/images/profile/me2021red.webp";

const textJson = require("../text/navbar.json");
const language = "eng"; // must be either "eng" or "de" for the text language (see navbar.json)

export default function Navbar() {
  // set the default title field text and background color based on the "navbar.json" and Navbar.module
  const [pageTitle, setPageTitle] = useState(textJson.home[language].title);
  const [pageDescription, setPageDescription] = useState(
    textJson.home[language].description
  );
  const [backgroundColor, setBackgroundColor] = useState(
    styles.back_color_home
  );

  /**
   * Handels the click event on an link element, changes the title, description and background color
   * @param {string} title of the page heading
   * @param {string} description under the page heading
   * @param {styles} backColor background color of the title element (refers to style class)
   */
  function handleLinkClick(title, description, backColor) {
    setPageTitle(title);
    setPageDescription(description);
    setBackgroundColor(backColor);
  }

  return (
    <nav>
      <div className={`${styles.container_navbar}`}>
        {/* image element */}
        <div className={`${styles.field_image}`}>
          <Image
            src={profilePicture}
            // height={292}
            // width={200}
            className={styles.profilePicture}
            alt="Zoltan's profile picture"
          />
        </div>
        <div className={`${styles.container_title_link}`}>
          {/* title element */}
          <header className={`${styles.field_title} ${backgroundColor}`}>
            <h1>{pageTitle}</h1>
            <p>{pageDescription}</p>
          </header>
          <div className={`${styles.field_links}`}>
            {/* 6 individual link elements */}
            {/* home link */}
            <div
              className={`${styles.link_home}`}
              aria-label={textJson.home[language].hover_title}
              title={textJson.home[language].hover_title}
              onClick={() =>
                handleLinkClick(
                  textJson.home[language].title,
                  textJson.home[language].description,
                  styles.back_color_home
                )
              }
            >
              <i className={`${styles.icon_svg} ${textJson.home.icon}`}></i>
              <span>{textJson.home[language].link_title}</span>
            </div>
            {/* about link */}
            <div
              className={`${styles.link_about}`}
              aria-label={textJson.about[language].hover_title}
              title={textJson.about[language].hover_title}
              onClick={() =>
                handleLinkClick(
                  textJson.about[language].title,
                  textJson.about[language].description,
                  styles.back_color_about
                )
              }
            >
              <i className={`${styles.icon_svg} ${textJson.about.icon}`}></i>
              <span>{textJson.about[language].link_title}</span>
            </div>
            {/* certificates link */}
            <div
              className={`${styles.link_certificates}`}
              aria-label={textJson.certificates[language].hover_title}
              title={textJson.certificates[language].hover_title}
              onClick={() =>
                handleLinkClick(
                  textJson.certificates[language].title,
                  textJson.certificates[language].description,
                  styles.back_color_certificates
                )
              }
            >
              <i
                className={`${styles.icon_svg} ${textJson.certificates.icon}`}
              ></i>
              <span>{textJson.certificates[language].link_title}</span>
            </div>{" "}
            {/* projects link */}
            <div
              className={`${styles.link_projects}`}
              aria-label={textJson.projects[language].hover_title}
              title={textJson.projects[language].hover_title}
              onClick={() =>
                handleLinkClick(
                  textJson.projects[language].title,
                  textJson.projects[language].description,
                  styles.back_color_projects
                )
              }
            >
              <i className={`${styles.icon_svg} ${textJson.projects.icon}`}></i>
              <span>{textJson.projects[language].link_title}</span>
            </div>
            {/* notes link */}
            <div
              className={`${styles.link_notes}`}
              aria-label={textJson.notes[language].hover_title}
              title={textJson.notes[language].hover_title}
              onClick={() =>
                handleLinkClick(
                  textJson.notes[language].title,
                  textJson.notes[language].description,
                  styles.back_color_notes
                )
              }
            >
              <i className={`${styles.icon_svg} ${textJson.notes.icon}`}></i>
              <span>{textJson.notes[language].link_title}</span>
            </div>
            {/* apps link */}
            <div
              className={`${styles.link_apps}`}
              aria-label={textJson.apps[language].hover_title}
              title={textJson.apps[language].hover_title}
              onClick={() =>
                handleLinkClick(
                  textJson.apps[language].title,
                  textJson.apps[language].description,
                  styles.back_color_apps
                )
              }
            >
              <i className={`${styles.icon_svg} ${textJson.apps.icon}`}></i>
              <span>{textJson.apps[language].link_title}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
