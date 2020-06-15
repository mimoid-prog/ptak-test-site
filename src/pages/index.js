import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import MainLayout from "layouts/MainLayout"
import SEO from "utils/seo"
import Header from "components/index/Header"
import StickyBar from "components/index/StickyBar"
import Partners from "components/index/Partners"
import Introduction from "components/index/Introduction"
import Ptak from "components/index/Ptak"
import Footer from "components/footer/Footer"

const IndexPage = () => {
  const intl = useIntl()

  return (
    <MainLayout>
      <SEO title={intl.formatMessage({ id: "global.name" })} />
      <Header />
      <StickyBar />
      <Partners />
      <Introduction />
      <Ptak />
      <Footer />
    </MainLayout>
  )
}

export default IndexPage
