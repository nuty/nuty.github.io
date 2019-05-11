const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/aruarian/workon/piccolo/nuty.github.io/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-templates-categories-js": hot(preferDefault(require("/Users/aruarian/workon/piccolo/nuty.github.io/src/templates/categories.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("/Users/aruarian/workon/piccolo/nuty.github.io/src/templates/post.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/aruarian/workon/piccolo/nuty.github.io/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/aruarian/workon/piccolo/nuty.github.io/src/pages/index.js")))
}

