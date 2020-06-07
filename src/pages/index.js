import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import MainLayout from "layouts/MainLayout"
import SEO from "utils/seo"
import Header from "components/index/Header"
import StickyBar from "components/index/StickyBar"

const IndexPage = () => {
  const intl = useIntl()

  return (
    <MainLayout>
      <SEO
        title={`${intl.formatMessage({
          id: "global.name",
        })} - ${intl.formatMessage({ id: "home.title" })}`}
      />
      <Header />
      <StickyBar />
      <h1 style={{ textAlign: "center", fontSize: "60px", color: "#e6e6e6" }}>
        PTAK WARSAW EXPO
      </h1>
    </MainLayout>
  )
}

export default IndexPage
