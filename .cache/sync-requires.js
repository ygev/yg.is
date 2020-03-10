const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/yg/_projects/ygis/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/yg/_projects/ygis/src/pages/index.js"))),
  "component---src-pages-phisher-index-js": hot(preferDefault(require("/Users/yg/_projects/ygis/src/pages/phisher/index.js"))),
  "component---src-pages-fisqual-index-js": hot(preferDefault(require("/Users/yg/_projects/ygis/src/pages/fisqual/index.js"))),
  "component---src-pages-ditto-index-js": hot(preferDefault(require("/Users/yg/_projects/ygis/src/pages/ditto/index.js"))),
  "component---src-pages-cluse-index-js": hot(preferDefault(require("/Users/yg/_projects/ygis/src/pages/cluse/index.js"))),
  "component---src-pages-trunks-index-js": hot(preferDefault(require("/Users/yg/_projects/ygis/src/pages/trunks/index.js")))
}

