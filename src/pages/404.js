import React from "react"
import SecondaryLayout from "layouts/SecondaryLayout"
import { Container, TertiaryTitle, PrimaryButton } from "styles/GlobalStyles"
import { useTranslation } from "react-i18next"

const GS = {}
GS.Container = Container
GS.TertiaryTitle = TertiaryTitle
GS.PrimaryButton = PrimaryButton

const ForExhibitors = () => {
  const { t } = useTranslation()

  return (
    <SecondaryLayout>
      <GS.Container style={{ textAlign: "center" }}>
        <GS.TertiaryTitle>{t("404.title")}</GS.TertiaryTitle>
        <GS.PrimaryButton to="/">{t("404.button")}</GS.PrimaryButton>
      </GS.Container>
    </SecondaryLayout>
  )
}

export default ForExhibitors
