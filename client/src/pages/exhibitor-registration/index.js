import React from "react"
import { useTranslation } from "react-i18next"

import FormLayout from "layouts/FormLayout"
import SEO from "utils/seo"
import ExhibitorForm from "components/forms/ExhibitorForm"

const ExhibitorRegistration = () => {
  const { t } = useTranslation()

  return (
    <FormLayout>
      <SEO
        title={`${t("exhibitorRegistration.title")} - ${t("global.name")}`}
      />
      <h2>{t("exhibitorRegistration.title")}</h2>
      <p>{t("exhibitorRegistration.desc")}</p>
      <ExhibitorForm />
    </FormLayout>
  )
}

export default ExhibitorRegistration
