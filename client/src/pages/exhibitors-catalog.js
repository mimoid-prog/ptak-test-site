import React from "react"
import SecondaryLayout from "layouts/SecondaryLayout"
import { Container, TertiaryTitle } from "styles/GlobalStyles"
import ExhibitorsCatalogList from "components/exhibitorsCatalog/ExhibitorsCatalogList"
import { useTranslation } from "react-i18next"

const GS = {}
GS.Container = Container
GS.TertiaryTitle = TertiaryTitle

const ExhibitorsCatalog = () => {
  const { t } = useTranslation()

  return (
    <SecondaryLayout>
      <GS.Container>
        <GS.TertiaryTitle>{t("exhibitorsCatalog.title")}</GS.TertiaryTitle>
        <ExhibitorsCatalogList />
      </GS.Container>
    </SecondaryLayout>
  )
}

export default ExhibitorsCatalog
