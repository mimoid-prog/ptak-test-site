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

const VisitorConfirmation = ({ location }) => {
  const intl = useIntl()

  return (
    <FormLayout>
      <SEO
        title={`${intl.formatMessage({
          id: "visitorConfirmation.title",
        })} - ${intl.formatMessage({ id: "global.name" })}`}
      />
      <h4>{intl.formatMessage({ id: "visitorConfirmation.greeting" })}</h4>
      <p>
        {intl.formatMessage({ id: "visitorConfirmation.greetingText" })}{" "}
        {intl.formatMessage({ id: "global.name" })}.
      </p>
      <p>{intl.formatMessage({ id: "visitorConfirmation.info" })}</p>
      {location.state && (
        <S.DownloadButton as="a" href={location.state.qr} download="qrcode">
          {intl.formatMessage({ id: "visitorConfirmation.downloadQR" })}
        </S.DownloadButton>
      )}
      <p>{intl.formatMessage({ id: "visitorConfirmation.openingHours" })}*</p>
      <ul>
        <li>{intl.formatMessage({ id: "global.firstDay" })}</li>
        <li>{intl.formatMessage({ id: "global.secondDay" })}</li>
        <li>{intl.formatMessage({ id: "global.thirdDay" })}</li>
      </ul>
      <p>
        {intl.formatMessage({
          id: "visitorConfirmation.openingHoursChange",
        })}
      </p>
      <h4>{intl.formatMessage({ id: "visitorConfirmation.farewell" })}</h4>
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

export default VisitorConfirmation
