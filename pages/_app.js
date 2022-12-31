import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css"; // Add Bootstrap css only
import "bootstrap-icons/font/bootstrap-icons.css"; // Add Bootstrap icons
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  // add Bootstrap for JavaScript
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return <Component {...pageProps} />;
}
