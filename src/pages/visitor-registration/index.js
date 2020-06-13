import React from "react"
import { useIntl } from "gatsby-plugin-intl"

import FormLayout from "layouts/FormLayout"
import SEO from "utils/seo"
import VisitorForm from "components/forms/VisitorForm"

const VisitorRegistration = () => {
  const intl = useIntl()

  return (
    <FormLayout>
      <SEO
        title={`${intl.formatMessage({
          id: "visitorRegistration.title",
        })} - ${intl.formatMessage({ id: "global.name" })}`}
      />
      <h2>{intl.formatMessage({ id: "visitorRegistration.title" })}</h2>
      <h4>{intl.formatMessage({ id: "visitorRegistration.desc" })}</h4>
      <VisitorForm />
    </FormLayout>
  )
}

export default VisitorRegistration
