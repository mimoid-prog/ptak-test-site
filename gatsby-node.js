const path = require(`path`)

const locales = require("./src/i18n/locales")
const resources = require("./src/i18n/resources")
const pages = require("./src/i18n/pages")

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  deletePage(page)

  const pathNoTrailingSlash =
    page.path === `/` ? page.path : page.path.replace(/\/$/, ``)

  if (pages.hasOwnProperty(pathNoTrailingSlash)) {
    Object.keys(pages[pathNoTrailingSlash]).map(lang => {
      let localizedPath = pages[pathNoTrailingSlash][lang].slug

      if (pages[pathNoTrailingSlash][lang].active) {
        return createPage({
          ...page,
          path: localizedPath,
          context: {
            ...page.context,
            locale: lang,
            localeResources: resources[lang] ? resources[lang] : {},
            pageSlug: pathNoTrailingSlash,
          },
        })
      }
    })
  }
  // Object.keys(locales).map(lang => {
  //   const pathNoTrailingSlash =
  //     page.path === `/` ? page.path : page.path.replace(/\/$/, ``)

  //   let localizedPath
  //   if (pages.hasOwnProperty(pathNoTrailingSlash)) {
  //     localizedPath = pages[pathNoTrailingSlash][lang].slug
  //     console.log(localizedPath)
  //   } else {
  //     localizedPath = locales[lang].default
  //       ? pathNoTrailingSlash
  //       : `/${lang}${pathNoTrailingSlash}`
  //   }

  //   return createPage({
  //     ...page,
  //     path: localizedPath,
  //     context: {
  //       ...page.context,
  //       locale: lang,
  //       localeResources: resources[lang] ? resources[lang] : {},
  //       pageSlug: pathNoTrailingSlash,
  //     },
  //   })
  // })
}
