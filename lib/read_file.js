/**
 * The purpose of this code is to update the Json files which are used to create the sub nav links in the navbar.
 * add
 *
 * "predev": "node ./lib/read_file.js","
 *
 * under "scripts" to the "package.json" file to run this file with the "npm run dev" command
 */

const dirTree = require("directory-tree");
const fs = require("fs");

// uses all the functions below to create a "json" file from the files in the specified directory
createJsonFile("assets/data/nav_links/nav_notes.json", "pages/notes");
createJsonFile("assets/data/nav_links/nav_projects.json", "pages/projects");
createJsonFile("assets/data/nav_links/nav_apps.json", "pages/apps");
createJsonFile(
  "assets/data/nav_links/nav_certificates.json",
  "pages/certificates"
);
createJsonFile("assets/data/nav_links/nav_about.json", "pages/about");

/**
 * Takes in a JavaScript object which needs to have
 * the format from the "dirTree" function and the
 * attribute "type" and returns an array of file paths.
 * @param {object} tree
 * @returns e.g. [{path: 'pages/file.js'}, {path: 'pages/anotherfile.js'}]
 */
function fileArray(tree) {
  let fileList = [];
  walkTree(tree.children);
  function walkTree(node) {
    for (let i = 0; i < node.length; i++) {
      if (node[i].type === "directory") {
        walkTree(node[i].children);
      } else if (node[i].type === "file") {
        let tempObj = {};
        tempObj.path = node[i].path;
        fileList.push(tempObj);
      }
    }
  }
  return fileList;
}

/**
 * Takes a path as a string and creates an array of directories from it.
 * 1. not from the first directory
 * 2. not from the file at the end of the path
 * @param {string} path e.g. "pages/notes/javascript/react/index.js"
 * @returns e.g. ["notes", "javascript", "react"]
 */
function dirList(path) {
  let onlyPath = path.slice(0, path.lastIndexOf("/"));
  onlyPath = onlyPath.split("/");
  onlyPath.shift();
  return onlyPath;
}

/**
 * Returns the last directory from the path (not the file name) as string.
 * 1. replaces "_" with " "
 * 2. capitalizes the first letter of every word
 * 3. name is changed to "JavaScript" if name is "javascript"
 * @param {string} path
 * @returns
 */
function dirTitle(path) {
  let onlyPath = path.slice(0, path.lastIndexOf("/"));
  onlyPath = onlyPath.split("/");
  let lastDir = onlyPath[onlyPath.length - 1];
  let dirTitle = formatTitle(lastDir);
  if (dirTitle === "Javascript") {
    return "JavaScript";
  }
  return dirTitle;
}

/**
 * Takes a string ...
 * 1. replaces "_" with " "
 * 2. capitalizes the first letter of every word
 * @param {string} title e.g. "javascript_is_great"
 * @returns e.g. "Javascript Is Great"
 */
function formatTitle(title) {
  let spacedTitle = title.replaceAll("_", " ");
  let titleArray = spacedTitle.split(" ");
  for (let i = 0; i < titleArray.length; i++) {
    titleArray[i] = titleArray[i][0].toUpperCase() + titleArray[i].substr(1);
  }
  return titleArray.join(" ");
}

/**
 * Takes a path as a string and returns the file name as title string.
 * 1. extension must have three characters including "." e.g. ".js"
 * 2. file name is capitalized in output
 * 3. if file name is "index.js" then its directory is used as title,
 * e.g. "pages/notes/javascript/react/index.js" -> "React"
 * @param {string} path e.g. "pages/notes/javascript/react/components.js"
 * @returns e.g. "Components"
 */
function title(path) {
  let onlyFile = path.slice(path.lastIndexOf("/") + 1, path.length - 3);
  if (onlyFile === "index") {
    let fromDir = dirList(path)[dirList(path).length - 1];
    return formatTitle(fromDir);
  }
  return formatTitle(onlyFile);
}

/**
 * Checks if an image is saved in the "public/icons" directory
 * with the name of the last folder of the "page file path".
 * 1. path -> path of the file (page)
 * 2. fileExtension -> what extension the image should have
 * 3. returns -> "false" if there is no image in the "public/icons/"
 * directory with the same name as the last directory of the file path
 * of the page with the correct extension,
 * returns "/icons/"+LAST_DIR_NAME+EXTENSION if found, can be used to
 * link the image on the page (the directory "public" dose not need to be in the path)
 * @param {string} path e.g. "notes/something/javascript/function.js"
 * @param {string} fileExtension e.g. ".svg"
 * @returns e.g. "/icons/javascript.svg"
 */
function imagePath(path, fileExtension) {
  let onlyPath = path.slice(0, path.lastIndexOf("/"));
  onlyPath = onlyPath.split("/");
  let lastDir = onlyPath[onlyPath.length - 1];
  let checkPath = "public/icons/" + lastDir + fileExtension;
  if (fs.existsSync(checkPath)) {
    checkPath = "/icons/" + lastDir + fileExtension;
  } else {
    checkPath = false;
  }
  return checkPath;
}

/**
 * Takes a path as a string and returns the file name as "next.js href" string.
 * 1. file path should be in lower case otherwise "next.js" can not link to it!!
 * 2. extension must have three characters including "." e.g. ".js"
 * 3. if file name is "index.js" then its directory is used as "next.js href" string,
 * 4. first part ("pages") is not used, next.js dose not need it for linking
 * e.g. "pages/notes/javascript/react/index.js" -> "/notes/javascript/react"
 * @param {string} path e.g. "pages/notes/javascript/react/components.js"
 * @returns e.g. "/notes/javascript/react/components"
 */
function linkHref(path) {
  let onlyFile = path.slice(5, path.length - 3);
  if (path.slice(path.length - 6, path.length - 3) === "/index") {
    onlyFile = path.slice(5, path.length - 9);
    let fromDir = dirList(path)[dirList(path).length - 1];
    if (fromDir === "pages") {
      return "/";
    }
  }
  return onlyFile;
}

/**
 * Takes in an array of objects containing the file names and returns an object of arrays.
 * @param {array} fileArray e.g. [{path: "pages/javascript/example_file.js"}]
 * @returns e.g. [{
 * - id: 'pagesjavascriptexample_file',
 * - title: 'Example File',
 * - link: '/example_file',
 * - directories: [ 'javascript' ],
 * - path: 'pages/javascript/example_file.js'},{} ]
 */
function navLinkObject(fileArray) {
  let navLinkArray = [];
  let dirExist = [];
  for (let i = 0; i < fileArray.length; i++) {
    let tempArray = fileArray[i].path.substring(0);
    tempArray = tempArray.replace(/\//g, "").replace(/\-/g, "");
    tempArray = tempArray.slice(0, tempArray.length - 3);
    let tempLinkObj = {};
    tempLinkObj.id = tempArray;
    tempLinkObj.linkTitle = title(fileArray[i].path);
    tempLinkObj.linkHref = linkHref(fileArray[i].path);
    tempLinkObj.directories = dirList(fileArray[i].path);
    tempLinkObj.path = fileArray[i].path.substring(0);

    let directoryTitle = dirTitle(fileArray[i].path);
    if (dirExist.includes(directoryTitle)) {
      let tPos = dirExist.indexOf(directoryTitle);
      navLinkArray[tPos].links.push(tempLinkObj);
    } else {
      dirExist.push(directoryTitle);
      let tempDirObj = {};
      tempDirObj.dirTitle = directoryTitle;
      tempDirObj.links = [tempLinkObj];
      tempDirObj.icon = imagePath(fileArray[i].path, ".svg");
      navLinkArray.push(tempDirObj);
    }
  }
  return navLinkArray;
}

/**
 * Creates a "json" file from a directory where every files is listed with some extra properties.
 * 1. files should be ".js" and can not have more then 2 characters as extension
 * 2. folder and file names need to be in lower case
 * 3. characters in an file names with an "_" are replaced with " " and every new word is capitalized
 * @param {string} outJsonFilePath path and name of of the "json" output file
 * @param {string} inDirectoryPath path of directory which will be processed, needs to be absolute path
 */
function createJsonFile(outJsonFilePath, inDirectoryPath) {
  // Creates a JavaScript object representing a directory tree.
  // https://www.npmjs.com/package/directory-tree?activeTab=readme

  const tree = dirTree(inDirectoryPath, { attributes: ["type"] });
  if (!tree) {
    console.log(
      `Error, the path (${inDirectoryPath}) to the input folder is not correct.`
    );
    return;
  }
  let jsonFileForm = JSON.stringify(navLinkObject(fileArray(tree)));
  let errMessageFile = outJsonFilePath.slice(0, outJsonFilePath.length);
  fs.writeFile(outJsonFilePath, jsonFileForm, "utf8", function (err) {
    if (err) {
      console.log(
        `An error occurred while writing '${errMessageFile}' JSON Object to File.`
      );
      return console.log(err);
    }
    console.log(`JSON file has been saved to, '${errMessageFile}'`);
  });
}
