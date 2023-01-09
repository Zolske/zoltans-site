import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css"; // Add Bootstrap css only
import "bootstrap-icons/font/bootstrap-icons.css"; // Add Bootstrap icons
import styles from "../styles/Home.module.css";

import { useEffect } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }) {
  // add Bootstrap for JavaScript
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <>
      <Navbar />
      <main className="main_style">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
