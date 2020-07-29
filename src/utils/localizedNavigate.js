import { navigate } from "gatsby"
import pages from "i18n/pages"

export default (url, lang, state) => navigate(pages[url][lang].slug, state)
