import React from "react"
import styled from "styled-components"
import { useIntl } from "gatsby-plugin-intl"
import { PrimaryButton } from "styles/GlobalStyles"
import FormLayout from "layouts/FormLayout"
import SEO from "utils/seo"

const S = {}
S.DownloadButton = styled(PrimaryButton)`
  background-color: black;
  margin-bottom: 10px;

  &:hover {
    background-color: #121212;
  }
`

const ExhibitorConfirmation = () => {
  const intl = useIntl()

  return (
    <FormLayout>
      <SEO
        title={`${intl.formatMessage({
          id: "exhibitorConfirmation.title",
        })} - ${intl.formatMessage({ id: "global.name" })}`}
      />
      <h4>{intl.formatMessage({ id: "exhibitorConfirmation.greeting" })}</h4>
      <p>{intl.formatMessage({ id: "exhibitorConfirmation.info" })}</p>
      <p>{intl.formatMessage({ id: "exhibitorConfirmation.info2" })}</p>
      <p>{intl.formatMessage({ id: "exhibitorConfirmation.openingHours" })}*</p>
      <ul>
        <li>{intl.formatMessage({ id: "global.firstDay" })}</li>
        <li>{intl.formatMessage({ id: "global.secondDay" })}</li>
        <li>{intl.formatMessage({ id: "global.thirdDay" })}</li>
      </ul>
      <p>
        {intl.formatMessage({
          id: "exhibitorConfirmation.openingHoursChange",
        })}
      </p>
      <h4>{intl.formatMessage({ id: "exhibitorConfirmation.farewell" })}</h4>
      <ul style={{ listStyle: "none" }}>
        <li>{intl.formatMessage({ id: "global.company" })}</li>
        <li>{intl.formatMessage({ id: "global.street" })}</li>
        <li>
          {intl.formatMessage({ id: "global.postal" })},{" "}
          {intl.formatMessage({ id: "global.city" })}
        </li>
      </ul>
    </FormLayout>
  )
}

export default ExhibitorConfirmation
