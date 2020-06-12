import React from "react"
import { useIntl } from "gatsby-plugin-intl"

import FormLayout from "layouts/FormLayout"
import SEO from "utils/seo"
import ExhibitorForm from "components/forms/ExhibitorForm"

const BecomeAnExhibitor = () => {
  const intl = useIntl()

  return (
    <FormLayout>
      <SEO
        title={`${intl.formatMessage({
          id: "becomeAnExhibitor.title",
        })} - ${intl.formatMessage({ id: "global.name" })}`}
      />
      <h2>{intl.formatMessage({ id: "becomeAnExhibitor.title" })}</h2>
      <p>{intl.formatMessage({ id: "becomeAnExhibitor.desc" })}</p>
      <ExhibitorForm />
    </FormLayout>
  )
}

export default BecomeAnExhibitor
