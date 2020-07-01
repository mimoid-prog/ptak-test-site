import React from "react"
import SEO from "utils/seo"
import Header from "components/index/Header"
import StickyBar from "components/index/StickyBar"
import Partners from "components/index/Partners"
import Introduction from "components/index/Introduction"
import ThematicZones from "components/index/ThematicZones"
import Statistics from "components/index/Statistics"
import Practical from "components/index/Practical"
import Footer from "components/footer/Footer"
import { useTranslation } from "react-i18next"

const IndexPage = () => {
  const { t } = useTranslation()

  return (
    <div>
      <SEO title={t("global.name")} />
      <Header />
      <StickyBar />
      <Partners />
      <Introduction />
      <ThematicZones />
      <Statistics />
      <Practical />
      <Footer />
    </div>
  )
}

export default IndexPage
