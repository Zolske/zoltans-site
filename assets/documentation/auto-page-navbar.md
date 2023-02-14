[&#X21e7; back to the "README" &#X21e7;](../../README.md)
# auto-page-navbar documentation
*The purpose of this feature is to add files and folders to the main navbar when they are added to the project's "**pages/about**", "**pages/certificates**", "**pages/notes**", "**pages/projects**", "**pages/apps**" directory.*  
## important rules
- folder and file names need to be in lower case
- only `.js` files, no `.jsx` or `.tsx` 
- directories are represented as folders which contain the links
    - underscores `_` are replaced with an empty space
    - the beginning of every word is capitalized
    - e.g. the directory in the project "**css_components**" becomes the link-folder "**Css Components**" in the navbar

## General Behavior
- The file containing the necessary code is located in `/lib/read_file.js`  
- the `read_file.js` file is executed with every `npm run dev` and `npm run build` command because of the modified `package.json`
```
  "scripts": {
    "dev": "next dev",
    "predev": "node ./lib/read_file.js",
    "build": "next build",
    "prebuild": "node ./lib/read_file.js",
    }
```
- the npm **[directory-tree](https://www.npmjs.com/package/directory-tree)** package has been used to "Creates a JavaScript object representing a directory tree".