// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": () => import("/Users/rosso/workon/piccolo/rosso-gatsby/node_modules/gatsby-plugin-offline/app-shell.js" /* webpackChunkName: "component---node-modules-gatsby-plugin-offline-app-shell-js" */),
  "component---src-templates-categories-js": () => import("/Users/rosso/workon/piccolo/rosso-gatsby/src/templates/categories.js" /* webpackChunkName: "component---src-templates-categories-js" */),
  "component---src-templates-post-js": () => import("/Users/rosso/workon/piccolo/rosso-gatsby/src/templates/post.js" /* webpackChunkName: "component---src-templates-post-js" */),
  "component---src-pages-404-js": () => import("/Users/rosso/workon/piccolo/rosso-gatsby/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/Users/rosso/workon/piccolo/rosso-gatsby/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/rosso/workon/piccolo/rosso-gatsby/.cache/data.json")

