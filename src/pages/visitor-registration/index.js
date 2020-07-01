import React from "react"
import FormLayout from "layouts/FormLayout"
import SEO from "utils/seo"
import VisitorForm from "components/forms/VisitorForm"
import { useTranslation } from "react-i18next"

const VisitorRegistration = () => {
  const { t } = useTranslation()

  return (
    <FormLayout>
      <SEO title={`${t("visitorRegistration.title")} - ${t("global.name")}`} />
      <h2>{t("visitorRegistration.title")}</h2>
      <h4>{t("visitorRegistration.desc")}</h4>
      <VisitorForm />
    </FormLayout>
  )
}

export default VisitorRegistration
