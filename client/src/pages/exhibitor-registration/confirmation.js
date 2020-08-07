import React from "react"
import styled from "styled-components"
import { PrimaryButton } from "styles/GlobalStyles"
import FormLayout from "layouts/FormLayout"
import SEO from "utils/seo"
import { useTranslation } from "react-i18next"

const S = {}
S.DownloadButton = styled(PrimaryButton)`
  background-color: black;
  margin-bottom: 10px;

  &:hover {
    background-color: #121212;
  }
`

const ExhibitorConfirmation = () => {
  const { t } = useTranslation()

  return (
    <FormLayout>
      <SEO
        title={`${t("exhibitorConfirmation.title")} - ${t("global.name")}`}
      />
      <h4>{t("exhibitorConfirmation.greeting")}</h4>
      <p>{t("exhibitorConfirmation.info")}</p>
      <p>{t("exhibitorConfirmation.info2")}</p>
      <p>{t("exhibitorConfirmation.openingHours")}*</p>
      <ul>
        <li>{t("global.firstDay")}</li>
        <li>{t("global.secondDay")}</li>
        <li>{t("global.thirdDay")}</li>
      </ul>
      <p>{t("exhibitorConfirmation.openingHoursChange")}</p>
      <h4>{t("exhibitorConfirmation.farewell")}</h4>
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

export default ExhibitorConfirmation
