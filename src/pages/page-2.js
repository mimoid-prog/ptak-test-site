import React from "react"
import { useIntl, Link } from "gatsby-plugin-intl"

import Layout from "layouts/Layout"
import SEO from "../components/seo"

const SecondPage = () => {
  const intl = useIntl()

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <p>{intl.formatMessage({ id: "global.firstDay" })}</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage
