import React from "react"
import { Link } from "gatsby-plugin-intl"
import Layout from "layouts/layout"
import SEO from "utils/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 - nie znaleziono" />
    <h2>Ups, nie ma takiej strony</h2>
    <Link to="/">Strona główna</Link>
  </Layout>
)

export default NotFoundPage
