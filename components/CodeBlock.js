import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css"; //code themes
import "prismjs/components/prism-jsx.js"; //every language needs to be imported individual
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/toolbar/prism-toolbar.js"; //is needed for the copy and show lang. button
import "prismjs/plugins/toolbar/prism-toolbar.css"; //is needed for the copy and show lang. button
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js";
import "prismjs/plugins/show-language/prism-show-language.js";
import "prismjs/plugins/line-highlight/prism-line-highlight.js";
import "prismjs/plugins/line-highlight/prism-line-highlight.css";

export default function CodeBlock({ codeBlock, language, lineHighlight = "" }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <main>
      <pre
        className="line-numbers copy-to-clipboard-button"
        data-line={lineHighlight}
      >
        <code className={language}>{codeBlock}</code>
      </pre>
    </main>
  );
}
