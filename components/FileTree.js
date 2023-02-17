import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css"; //code themes
import "prismjs/plugins/treeview/prism-treeview.js";
import "prismjs/plugins/treeview/prism-treeview.css";

export default function FileTree({ treeView }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <main>
      <pre>
        <code className="language-treeview">{treeView}</code>
      </pre>
    </main>
  );
}
