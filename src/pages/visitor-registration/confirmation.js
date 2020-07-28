import React from "react"
import styled from "styled-components"
import { PrimaryButton } from "styles/GlobalStyles"
import FormLayout from "layouts/FormLayout"
import SEO from "utils/seo"
import { useTranslation, Trans } from "react-i18next"

const S = {}
S.DownloadButton = styled(PrimaryButton)`
  background-color: black;
  margin-bottom: 10px;

  &:hover {
    background-color: #121212;
  }
`
S.List = styled("ul")`
  br {
    display: none;
  }
`

const VisitorConfirmation = ({ location }) => {
  const { t } = useTranslation()

  return (
    <FormLayout>
      <SEO title={`${t("visitorConfirmation.title")} - ${t("global.name")}`} />
      <h4>{t("visitorConfirmation.greeting")}</h4>
      <p>
        {t("visitorConfirmation.greetingText")} {t("global.name")}.
      </p>
      <p>{t("visitorConfirmation.info")}</p>
      {location.state && (
        <S.DownloadButton as="a" href={location.state.qr} download="qrcode">
          {t("visitorConfirmation.downloadQR")}
        </S.DownloadButton>
      )}
      <p>{t("visitorConfirmation.openingHours")}*</p>
      <S.List>
        <li>
          <Trans>{"global.firstDay"}</Trans>
        </li>
        <li>
          <Trans>{"global.secondDay"}</Trans>
        </li>
        <li>
          <Trans>{"global.thirdDay"}</Trans>
        </li>
      </S.List>
      <p>{t("visitorConfirmation.openingHoursChange")}</p>
      <h4>{t("visitorConfirmation.farewell")}</h4>
      <ul style={{ listStyle: "none" }}>
        <li>{t("global.company")}</li>
        <li>{t("global.street")}</li>
        <li>
          {t("global.postal")}, {t("global.city")}
        </li>
      </ul>
    </FormLayout>
  )
}

export default VisitorConfirmation
