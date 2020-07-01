const path = require(`path`)

const locales = require("./src/i18n/locales")
const resources = require("./src/i18n/resources")
const pages = require("./src/i18n/pages")

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  deletePage(page)

  Object.keys(locales).map(lang => {
    const pathNoTrailingSlash =
      page.path === `/` ? page.path : page.path.replace(/\/$/, ``)

    let localizedPath
    if (pages.hasOwnProperty(pathNoTrailingSlash)) {
      localizedPath = pages[pathNoTrailingSlash][lang]
    } else {
      localizedPath = locales[lang].default
        ? pathNoTrailingSlash
        : `/${lang}${pathNoTrailingSlash}`
    }

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
  })
}
