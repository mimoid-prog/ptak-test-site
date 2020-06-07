import React from "react"
import { Link } from "gatsby-plugin-intl"
import MainLayout from "layouts/MainLayout"
import SEO from "utils/seo"

const NotFoundPage = () => (
  <MainLayout>
    <SEO title="404 - nie znaleziono" />
    <h2>Ups, nie ma takiej strony</h2>
    <Link to="/">Strona główna</Link>
  </MainLayout>
)

export default NotFoundPage
