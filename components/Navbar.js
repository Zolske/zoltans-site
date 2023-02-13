import styles from "../styles/modules/Navbar.module.css";
import { useState } from "react";
import Image from "next/image";
import logo_icon from "../assets/images/logo/logo_laptop_red.png";
import NavbarLinks from "./NavbarLinks";
import NavButton from "./NavButton";
import LogoWriter from "./LogoWriter";

let navLinkProjects = navLinkFilter("nav_projects.json");
let navLinkNotes = navLinkFilter("nav_notes.json");
let navLinkAbout = navLinkFilter("nav_about.json");
let navLinkApps = navLinkFilter("nav_apps.json");
let navLinkCertificates = navLinkFilter("nav_certificates.json");

export default function Navbar() {
  // set the default title field text and background color based on the "navbar.json" and Navbar.module
  const [pageTitle, setPageTitle] = useState(navButtonLinks[0].titlePage);
  const [pageDescription, setPageDescription] = useState(
    navButtonLinks[0].titleDescription
  );
  const [pageBackground, setPageBackground] = useState(
    navButtonLinks[0].titleBackground
  );

  const [showHomeLinks, setShowHomeLinks] = useState("none");
  navButtonLinks[0].showLinks = showHomeLinks;
  const [showAboutLinks, setShowAboutLinks] = useState("none");
  navButtonLinks[1].showLinks = showAboutLinks;
  const [showCertificatesLinks, setShowCertificatesLinks] = useState("none");
  navButtonLinks[2].showLinks = showCertificatesLinks;
  const [showProjectsLinks, setShowProjectsLinks] = useState("none");
  navButtonLinks[3].showLinks = showProjectsLinks;
  const [showAppsLinks, setShowAppsLinks] = useState("none");
  navButtonLinks[4].showLinks = showAppsLinks;
  const [showNoteLinks, setShowNoteLinks] = useState("none");
  navButtonLinks[5].showLinks = showNoteLinks;

  function setShowLinks(whatLink) {
    switch (whatLink) {
      case "notes":
        unsetShowLinks();
        setShowNoteLinks("block");
        break;
      case "projects":
        unsetShowLinks();
        setShowProjectsLinks("block");
        break;
      case "certificates":
        unsetShowLinks();
        setShowCertificatesLinks("block");
        break;
      case "apps":
        unsetShowLinks();
        setShowAppsLinks("block");
        break;
      case "home":
        unsetShowLinks();
        setShowHomeLinks("block");
        break;
      case "about":
        unsetShowLinks();
        setShowAboutLinks("block");
        break;
    }
  }

  function unsetShowLinks() {
    setShowNoteLinks("none");
    setShowProjectsLinks("none");
    setShowCertificatesLinks("none");
    setShowAppsLinks("none");
    setShowHomeLinks("none");
    setShowAboutLinks("none");
  }

  /**
   * Handels the click event on an link element, changes the title, description and background color
   * @param {string} title of the page heading
   * @param {string} description under the page heading
   * @param {styles} background background image of the title element
   */
  function handleLinkClick(page_title, description, background) {
    setPageTitle(page_title);
    setPageDescription(description);
    setPageBackground(background);
  }

  return (
    <>
      <div className={styles.grid_container}>
        <div className={styles.area_logo}>
          <Image
            src={logo_icon}
            // className={styles.logo_icon}
            alt="logo icon"
            height={50}
          />
          <LogoWriter logo_1={"< ZOLTAN / "} logo_2={"KEPES "} logo_3={">"} />
        </div>
        <header
          className={styles.area_title}
          onMouseOver={() => unsetShowLinks()}
        >
          <h1>{pageTitle}</h1>
          <p>{pageDescription}</p>
          <Image
            src={pageBackground}
            className={styles.title_background}
            alt=""
            fill
            style={{
              objectFit: "cover",
            }}
            priority="true"
          />
        </header>
      </div>
      <div className={styles.grid_container_sticky}>
        <nav className={styles.area_login}>login</nav>
        <nav className={styles.area_pages}>
          {navButtonLinks.map((link) => {
            return (
              <NavButton
                key={link.btn_title}
                style={styles.page_btn}
                label={link.label}
                icon={link.icon}
                index_link={link.index_link}
                title={link.btn_title}
                subMenu={link.subMenu}
                handleLinkClick={handleLinkClick}
                setShowLinks={setShowLinks}
                page_title={link.titlePage}
                page_description={link.titleDescription}
                page_background={link.titleBackground}
              />
            );
          })}
        </nav>
        {navButtonLinks.map((link) => {
          if (link.subMenu) {
            return (
              <NavbarLinks
                key={link.btn_title}
                jsonObject={link.subMenu}
                showLinks={link.showLinks}
                styles_area_links={styles.area_links}
                unsetShowLinks={unsetShowLinks}
                btn_title={link.btn_title}
              />
            );
          }
        })}
      </div>
    </>
  );
}

/**
 * Filters the navLink Json files which have to be located in "../assets/data/nav_links/".
 * The purpose of the function is to avoid creating empty "navlists" or folders which contain the index file or
 * any other file which are located in the base folder. E.g. "pages/notes/index.js" -> do not include "index" as link
 * nor a folder "notes"
 * 1. returns "false" if Json is an empty array
 * 2. removes folders from Json which are by default ["about", "apps", "certificates", "notes", "projects"],
 * but can be overwritten with new array in second argument
 * @param {string} json_file json file e.g. nav_notes.json
 * @param {array} except_index array containing folders which should not be included in json, e.g. ["notes"]
 * @returns false if array is empty or filter out specific folders
 */
function navLinkFilter(
  json_file,
  except_index = ["about", "apps", "certificates", "notes", "projects"]
) {
  let json = require("../assets/data/nav_links/" + json_file);
  let filteredJson = json.filter(
    (property) => !except_index.includes(property.dirTitle.toLowerCase())
  );
  return filteredJson.length === 0 ? false : filteredJson;
}

// information for the navbar content
let navButtonLinks = [
  {
    btn_title: "home",
    label: "opens the 'home' page",
    icon: "bi bi-house-door",
    index_link: "/",
    subMenu: false,
    titlePage: "Welcome to Zoltan's Website",
    titleDescription:
      "This is my place to keep and show my work. Feel free to browse around.",
    titleBackground: "/images/background/clouds.webp",
    showLinks: false,
  },
  {
    btn_title: "about",
    label: "opens the 'about' page",
    icon: "bi bi-person-vcard",
    index_link: "/about",
    subMenu: navLinkAbout,
    titlePage: "About Zoltan",
    titleDescription: "Here you can find out more about me.",
    titleBackground: "/images/background/wallart.webp",
    showLinks: false,
  },
  {
    btn_title: "certificates",
    label: "opens the 'certificates' page",
    icon: "bi bi-award",
    index_link: "/certificates",
    subMenu: navLinkCertificates,
    titlePage: "Certificates",
    titleDescription: "Some of my achievements and certificates.",
    titleBackground: "/images/background/certificate.webp",
    showLinks: false,
  },
  {
    btn_title: "projects",
    label: "opens the 'projects' page",
    icon: "bi bi-code-slash",
    index_link: "/projects",
    subMenu: navLinkProjects,
    titlePage: "Projects",
    titleDescription: "Projects and experiments.",
    titleBackground: "/images/background/coding.webp",
    showLinks: false,
  },
  {
    btn_title: "apps",
    label: "opens the 'apps' page",
    icon: "bi bi-controller",
    index_link: "/apps",
    subMenu: navLinkApps,
    titlePage: "Applications",
    titleDescription: "Have a look and try some of my programs.",
    titleBackground: "/images/background/apps.webp",
    showLinks: false,
  },
  {
    btn_title: "notes",
    label: "opens the 'notes' page",
    icon: "bi bi-pencil-square",
    index_link: "/notes",
    subMenu: navLinkNotes,
    titlePage: "Notes",
    titleDescription: "Important notes which I keep as reference.",
    titleBackground: "/images/background/paper.webp",
    showLinks: false,
  },
];
