[&#X21e7; back to the "README" &#X21e7;](../../README.md)

# auto-page-navbar documentation

_The purpose of this feature is to add files and folders to the website's main navbar when they are added to the project's "**pages/about**", "**pages/certificates**", "**pages/notes**", "**pages/projects**", "**pages/apps**" directory._

## file and folder naming rules

- folder and file names should be in lower case, to make it easier when typing the path into the "browser's search bar", but they also can contain capital letters
- only `.js` files, no `.jsx` or `.tsx`
- do not name a file "`index.js`", only the base files like **home, about, note, ...**
- project directories are represented as link-folders which contain the link(s) to the individual pages
  - empty folders without any files are not shown in the navbar
  - folder can have subfolder, but they are displayed equal in the navbar, e.g. project: `/pages/notes/javaScript/subfolder/example.js` is displayed on the website's navbar as: **JavaScript Subfolder**
  - underscores "`_`" are replaced with an empty space
  - the beginning of every word is capitalized
  - e.g. the directory in the project "**CSS_components**" becomes the link-folder "**CSS Components**" in the navbar
- image files in the `/public/icons/` folder, which have the exact same name (_apparat from the extension_) as the directory are added as icon to the link-folder in the website's navbar (_the path to the image is saved to the Json, any next.js valid image type is ok_)

## how it works

- the file containing the necessary code is located in `/lib/read_file.js`
- the `read_file.js` file is executed with every `npm run dev` and `npm run build` command because of the modified `package.json`

```
  "scripts": {
    "dev": "next dev",
    "predev": "node ./lib/read_file.js",
    "build": "next build",
    "prebuild": "node ./lib/read_file.js",
    }
```

- the npm **[directory-tree](https://www.npmjs.com/package/directory-tree)** package has been used to "Creates a JavaScript object representing a directory tree"
- the function `createJsonFile()` combines all other functions from the file
  - 1st argument is the path to where the folder structure is saved as Json data (_`/assets/data/nav_links/`_)
  - 2nd argument is the path to the directory which will be read (_`/pages/`_)
- the Json file is then used by the "navbar component" to create the structure for the navbar"assets/data/nav_links/nav_notes.json", "pages/notes"

[&#X21e7; back to the "README" &#X21e7;](../../README.md)
