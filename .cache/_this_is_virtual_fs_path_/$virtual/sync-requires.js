
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/marcelo/Documents/thaisbasso/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/marcelo/Documents/thaisbasso/src/pages/404.js")),
  "component---src-pages-contato-js": preferDefault(require("/home/marcelo/Documents/thaisbasso/src/pages/contato.js")),
  "component---src-pages-index-js": preferDefault(require("/home/marcelo/Documents/thaisbasso/src/pages/index.js")),
  "component---src-pages-sobre-mim-js": preferDefault(require("/home/marcelo/Documents/thaisbasso/src/pages/sobre-mim.js"))
}

