import styles from "../../../styles/modules/ProjectButton.module.css";
import CodeBlock from "../../../components/CodeBlock";
import FileTree from "../../../components/FileTree";

const treeView = `
root_folder/
├── a first folder/
|   ├── holidays.mov
|   ├── javascript-file.js
|   └── some_picture.jpg
├── documents/
|   ├── spreadsheet.xls
|   ├── manual.pdf
|   ├── document.docx
|   └── presentation.ppt
└── etc.
`;

const bitTree = `
└── styles
├── globals.css
└── modules
    ├── Footer.module.css
    ├── LogoWriter.module.css
    ├── NavbarLinks.module.css
    ├── Navbar.module.css
    └── ProjectButton.module.css
`;

const codeSample = `<div className="example">
{Math.random()}
</div>`;

export default function buttons({}) {
  return (
    <main>
      <h1>Buttons</h1>

      <div className={styles.body}>
        <a href="#" className={styles.btn_rotate_effect}>
          Hover Me
        </a>
      </div>
      <CodeBlock
        codeBlock={codeSample}
        language={"language-jsx"}
        lineHighlight={"1"}
      />
      <FileTree treeView={bitTree} />
    </main>
  );
}
