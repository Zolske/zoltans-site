import Link from "next/link";
import styles from "../styles/modules/NavbarLinks.module.css";
import Image from "next/image";
import "animate.css";

export default function NavbarLinks({ jsonObject }) {
  //   jsonObject.map((entry) => {
  //     console.log(entry.title);
  //   });
  //   console.log(jsonObject);
  //   for (const property in navLinkNotes) {
  //     console.log(`${property}: ${navLinkNotes[property].title}`);
  //   }

  return (
    <nav className={styles.nav_background}>
      {console.log(jsonObject[0].links)}
      {/* {jsonObject.map((entry) => {
        console.log(entry.title);
      })} */}
      {jsonObject.map((entry) => (
        <div
          className={`${styles.link_head} animate__animated animate__bounce`}
          key={entry.dirTitle}
        >
          {true && (
            <Image
              src={"/" + entry.dirTitle + ".svg"}
              width={25}
              height={25}
              alt={entry.dirTitle + " logo"}
            />
          )}
          {entry.dirTitle}
          <div className={`${styles.link_body}`}>
            <ul>
              {entry.links.map((list) => (
                <li key={list.id}>
                  <Link href={list.linkHref}>{list.linkTitle}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </nav>
  );
}
// <div className={styles.dropdown}>
//   {/* <button className="animate__animated animate__bounce">hello</button> */}
//   <button className={`${styles.dropbtn}`}>
//     hello <i class="bi bi-file-earmark-text"></i>&nbsp;
//     <i class="bi bi-arrow-bar-down"></i>
//   </button>
//   <div className={styles.dropdown_content}>
//     {}
//     <div className={styles.dropdown_sub}>
//       <button className={styles.dropbtn_sub}>
//         subfolder <i class="bi bi-file-earmark-text"> </i>
//         <i class="bi bi-arrow-bar-right"></i>
//       </button>

//       <div className={styles.dropdown_content_sub}>
//         <a href="#">
//           Link 1 <i class="bi bi-file-earmark-text"></i>
//         </a>
//         <a href="#">
//           Link 2 <i class="bi bi-file-earmark-text"></i>
//         </a>
//         <a href="#">
//           Link 3 <i class="bi bi-file-earmark-text"></i>
//         </a>
//       </div>
//     </div>
//     <div className={styles.dropdown_sub}>
//       <button className={styles.dropbtn_sub}>subfolder</button>
//       <div className={styles.dropdown_content_sub}>
//         <a href="#">Link 1</a>
//       </div>
//     </div>
//     <a href="#">Link 2</a>
//     <a href="#">Link 3</a>
//   </div>
// </div>

// function loopJsonObject({ jsonObject }) {
//   for (const property in jsonObject) {
//     <div className={styles.dropdown}>
//       <button className={styles.dropbtn}>
//         hello <i className="bi bi-file-earmark-text"></i>&nbsp;
//         <i className="bi bi-arrow-bar-down"></i>
//       </button>
//       <div className={styles.dropdown_content}></div>
//     </div>;
//   }
// }

// function links() {
//   for (const property in jsonObject) {
//     console.log(`${property}: ${jsonObject[property].title}`);
//   }
// }
