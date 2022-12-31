# How to add Bootstrap to Next.js

[original article by: A Goodman](https://www.kindacode.com/article/how-to-correctly-use-bootstrap-5-in-next-js/)

## using npm

### 1. install the bootstrap npm package

```bash
npm i bootstrap
```

### 2. add CSS as import (**pages/\_app.js**)

```bash
import "bootstrap/dist/js/bootstrap";
```

### 3. add JavaScript as useEffect (**pages/\_app.js**)

To avoid the errors, we have to make sure that the window and document objects only be used on the client side. That can be done with the useEffect hook:

```bash
useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
}, []);
```

The file (**pages/\_app.js**) should look now like the following code snipped.

```bash
import 'bootstrap/dist/css/bootstrap.css'; // Add this line
import '../styles/globals.css';

import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
```
