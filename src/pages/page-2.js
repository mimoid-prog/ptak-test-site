import React from "react"
import { useIntl, Link } from "gatsby-plugin-intl"

import MainLayout from "layouts/MainLayout"
import SEO from "../components/seo"

const SecondPage = () => {
  const intl = useIntl()

  return (
    <MainLayout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <p>{intl.formatMessage({ id: "global.firstDay" })}</p>
      <Link to="/">Go back to the homepage</Link>
    </MainLayout>
  )
}

export default SecondPage
