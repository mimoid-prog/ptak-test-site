import React from "react"
import { Link } from "gatsby"
import LocaleContext from "src/localeContext"
import pages from "i18n/pages"

export const LocalizedLink = ({ to, ...props }) => {
  const { locale } = React.useContext(LocaleContext)
  console.log("to: ", to)
  const path = pages[to][locale]

  return <Link {...props} to={path} />
}
