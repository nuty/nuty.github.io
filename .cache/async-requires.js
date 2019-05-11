// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": () => import("/Users/aruarian/workon/piccolo/nuty.github.io/node_modules/gatsby-plugin-offline/app-shell.js" /* webpackChunkName: "component---node-modules-gatsby-plugin-offline-app-shell-js" */),
  "component---src-templates-categories-js": () => import("/Users/aruarian/workon/piccolo/nuty.github.io/src/templates/categories.js" /* webpackChunkName: "component---src-templates-categories-js" */),
  "component---src-templates-post-js": () => import("/Users/aruarian/workon/piccolo/nuty.github.io/src/templates/post.js" /* webpackChunkName: "component---src-templates-post-js" */),
  "component---src-pages-404-js": () => import("/Users/aruarian/workon/piccolo/nuty.github.io/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/Users/aruarian/workon/piccolo/nuty.github.io/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/aruarian/workon/piccolo/nuty.github.io/.cache/data.json")

