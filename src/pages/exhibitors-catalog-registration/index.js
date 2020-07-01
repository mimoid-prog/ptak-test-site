import React from "react"
import SecondaryLayout from "layouts/SecondaryLayout"
import { Container, TertiaryTitle } from "styles/GlobalStyles"
import CompanyForm from "components/forms/CompanyForm"
import { useTranslation } from "react-i18next"

const GS = {}
GS.Container = Container
GS.TertiaryTitle = TertiaryTitle

const ExhibitorsCatalogRegistration = () => {
  const { t } = useTranslation()

  return (
    <SecondaryLayout>
      <GS.Container>
        <GS.TertiaryTitle>
          {t("exhibitorsCatalogRegistration.title")}
        </GS.TertiaryTitle>
        <p>{t("exhibitorsCatalogRegistration.desc")}</p>
        <CompanyForm />
      </GS.Container>
    </SecondaryLayout>
  )
}

export default ExhibitorsCatalogRegistration
