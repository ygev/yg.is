// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-cluse-index-js": () => import("../src/pages/cluse/index.js" /* webpackChunkName: "component---src-pages-cluse-index-js" */),
  "component---src-pages-ditto-index-js": () => import("../src/pages/ditto/index.js" /* webpackChunkName: "component---src-pages-ditto-index-js" */),
  "component---src-pages-fisqual-index-js": () => import("../src/pages/fisqual/index.js" /* webpackChunkName: "component---src-pages-fisqual-index-js" */),
  "component---src-pages-index-js": () => import("../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-phisher-index-js": () => import("../src/pages/phisher/index.js" /* webpackChunkName: "component---src-pages-phisher-index-js" */),
  "component---src-pages-trunks-index-js": () => import("../src/pages/trunks/index.js" /* webpackChunkName: "component---src-pages-trunks-index-js" */)
}

