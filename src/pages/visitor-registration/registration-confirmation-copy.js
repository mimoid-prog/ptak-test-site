import React from "react"
import styled from "styled-components"
import SecondaryLayout from "layouts/SecondaryLayout"
import { useIntl } from "gatsby-plugin-intl"
import { PrimaryButton } from "styles/GlobalStyles"

const S = {}
S.DownloadButton = styled(PrimaryButton)`
  background-color: black;

  &:hover {
    background-color: #121212;
  }
`

const RegistrationConfirmationCopy = ({ location }) => {
  const intl = useIntl()
  return (
    <SecondaryLayout>
      <h4>{intl.formatMessage({ id: "registrationConfirmation.greeting" })}</h4>
      <p>
        {intl.formatMessage({ id: "registrationConfirmation.greetingText" })}{" "}
        {intl.formatMessage({ id: "global.name" })}
      </p>
      <p>{intl.formatMessage({ id: "registrationConfirmation.info" })}</p>
      <S.DownloadButton>
        {intl.formatMessage({ id: "registrationConfirmation.downloadQR" })}
      </S.DownloadButton>
      <p>
        {intl.formatMessage({ id: "registrationConfirmation.openingHours" })}*
      </p>
      <ul>
        <li>{intl.formatMessage({ id: "global.firstDay" })}</li>
        <li>{intl.formatMessage({ id: "global.secondDay" })}</li>
        <li>{intl.formatMessage({ id: "global.thirdDay" })}</li>
      </ul>
      <p>
        {intl.formatMessage({
          id: "registrationConfirmation.openingHoursChange",
        })}
      </p>
      <h4>{intl.formatMessage({ id: "registrationConfirmation.farewell" })}</h4>
      <ul style={{ listStyle: "none" }}>
        <li>{intl.formatMessage({ id: "global.company" })}</li>
        <li>{intl.formatMessage({ id: "global.street" })}</li>
        <li>
          {intl.formatMessage({ id: "global.postal" })},{" "}
          {intl.formatMessage({ id: "global.city" })}
        </li>
      </ul>
    </SecondaryLayout>
  )
}

export default RegistrationConfirmationCopy
