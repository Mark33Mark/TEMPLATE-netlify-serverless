#Steps for creatiing template

  1. in terminal, create a simple Node project using the generic package.json file:
  ```
  mkdir <whatever project folder name you choose>
  npm init -y
  ```  
  2. update `package.json` file in following areas:  
     * `"name":` add project name - no caps, strict protocol - check [package.json syntax](https://docs.npmjs.com/cli/v10/configuring-npm/package-json)  
     *  `"license":`: I always set to `MIT` - better and simple general license.  
     *  `"author":` I use this: `"Mark Watson <mark@watsonised.com> (https://get.watsonised.com)",`  
     *  `"keywords": ["",""]` and `"description":` keywords is set as an array, descirption is a string.  These are important to help explain your project and with discoverability.
     *  `"type": "module",` needed if using versions of Node earlier than `v20.10.0`.  
     Without this type declaration, Node will not work with `import` syntax.  For example,  `import { Express } from "express";` will not work and you will need Common JS approach for importing: `const express = require("express")`  
     As I'm using `v20.15.1` I should be able to by-pass the type declaration and instead use a flag to my start script as follows, bu this isn't working with Vite, so still use `"type":"module",`:  
     [reference: stackoverflow article](https://stackoverflow.com/questions/61401475/why-is-type-module-in-package-json-file)
     ```
     {
        ...
            "scripts": {
                "start": "node --experimental-detect-module index.js"
            },
        ...
     }  
  3. return to your terminal and install dependencies as follows:  
```
    npm i react react-dom
    npm i -D vite sass vite-plugin-sass vite-plugin-react @vitejs/plugin-react-swc
    npm i -D vitest vitest-preview @vitest/ui jsdom @testing-library/jest-dom @testing-library/react @testing-library/user-event @vitest/coverage-v8 npm-run-all
```  
  4. the 3rd line of installs is if you will be setting up unit testing in Vite.  If you are then you need to create a `setupTests.js` file and update your `vite.config.js` as well.
  5. you're job's done here.  😁

  #Reference Material

  [vitest mocking - preferred article](https://dev.to/mayashavin/react-component-testing-with-vitest-efficiently-296c)
  [Detailed tutorial for testing react hooks](https://www.toptal.com/react/testing-react-hooks-tutorial)
  [vitest example](https://www.thisdot.co/blog/how-to-test-react-custom-hooks-and-components-with-vitest)
  [vitest hooks](https://dev.to/mbarzeev/mocking-data-fetching-react-hooks-nn5)
  [vitest component props](https://robertmarshall.dev/blog/react-component-props-passed-to-child-jest-unit-test/)
  [vitest mock a react component](https://robertmarshall.dev/blog/how-to-mock-a-react-component-in-jest/)
  [handling 'act' test warnings](https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning#2-when-testing-custom-hooks)

  [animation](https://stackoverflow.com/questions/52507110/implementing-transition-effects-in-react-js-when-state-changes)
  [svg encoder](https://yoksel.github.io/url-encoder/)
  [stackoverflow correct way to use svg for cursor](https://stackoverflow.com/questions/45962081/css-cursor-pointer-with-svg-image)
  [gradient generator](https://csshero.org/mesher/)
  [moving gradient background](https://bootcamp.uxdesign.cc/bringing-life-to-your-website-with-moving-mesh-gradient-backgrounds-20b7e26844a2)  
