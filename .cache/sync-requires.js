const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/yg/_projects/ygis/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/yg/_projects/ygis/src/pages/index.js"))),
  "component---src-pages-phishing-index-js": hot(preferDefault(require("/Users/yg/_projects/ygis/src/pages/phishing/index.js")))
}

