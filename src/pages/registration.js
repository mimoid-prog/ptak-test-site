import React from "react"
import { useIntl } from "gatsby-plugin-intl"

import FormLayout from "layouts/FormLayout"
import SEO from "utils/seo"
import VisitorForm from "components/forms/VisitorForm"

const SecondPage = () => {
  const intl = useIntl()

  return (
    <FormLayout>
      <SEO
        title={`${intl.formatMessage({
          id: "registration.title",
        })} - ${intl.formatMessage({ id: "global.name" })}`}
      />
      <h2>{intl.formatMessage({ id: "registration.title" })}</h2>
      <h4>{intl.formatMessage({ id: "registration.desc" })}</h4>
      <VisitorForm />
    </FormLayout>
  )
}

export default SecondPage
