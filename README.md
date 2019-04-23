# QuoteOfTheDay

---

"Quote of the Day" returns a new Bruce Lee quote everyday or every time you refresh the page. :muscle:

#### Tech Specs:

- React
- Webpack
- NPM
- Axios

---

### Steps for Deployment:

When app is ready to deploy run following:

```
npm run deploy
```

---

#### Deployment Info

> Resource: https://facebook.github.io/create-react-app/docs/deployment#github-pages-https-pagesgithubcom

1. In package.json add "homepage": "http://www.mudanic.com" field
2. Install npm package gh-pages:
   > npm install --save gh-pages

- Add following code to package.json `"predeploy": "webpack --config webpack.config.js", "deploy": "gh-pages -d dist"`
- "predeploy": runs once `npm run deploy` is ran; **purpose**: builds/bundles code before publishing to gh-pages branch; gets a fresh bundle of code, based on webpack.config.js file.
- "deploy": runs with the command `npm run deploy`; will run `npm run predeploy` command; takes "output filename" (dist) folder that was just freshly bundled from the **predeploy** command, adds, commits, pushs new dist folder to gh-pages branch.
