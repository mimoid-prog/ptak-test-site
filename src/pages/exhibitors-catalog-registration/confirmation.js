import React from "react"
import SecondaryLayout from "layouts/SecondaryLayout"
import { Container, TertiaryTitle, PrimaryButton } from "styles/GlobalStyles"
import { useTranslation } from "react-i18next"

const GS = {}
GS.Container = Container
GS.TertiaryTitle = TertiaryTitle
GS.PrimaryButton = PrimaryButton

const ExhibitorsRegistrationConfirmation = () => {
  const { t } = useTranslation()

  return (
    <SecondaryLayout>
      <GS.Container>
        <GS.TertiaryTitle>
          {t("exhibitorsCatalogConfirmation.title")}
        </GS.TertiaryTitle>
        <p>{t("exhibitorsCatalogConfirmation.desc")}</p>
        <GS.PrimaryButton to="/exhibitors-catalog">
          {t("exhibitorsCatalogConfirmation.btn")}
        </GS.PrimaryButton>
      </GS.Container>
    </SecondaryLayout>
  )
}

export default ExhibitorsRegistrationConfirmation
