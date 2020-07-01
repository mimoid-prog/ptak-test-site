import React from "react"
import Navbar from "components/navbar/Navbar"
import FooterBar from "components/footer/FooterBar"
import { Container } from "styles/GlobalStyles"
import * as S from "./FormLayoutStyles"
import SSL from "images/ssl.png"
import logo from "images/logo.png"
import ptak from "images/ptak-logo-white.png"
import { useTranslation } from "react-i18next"

const GS = {}
GS.Container = Container

const FormLayout = ({ children }) => {
  const { t } = useTranslation()

  return (
    <div>
      <S.FormLayoutWrapper>
        <GS.Container>
          <Navbar />
          <S.FormLayoutContent>
            <S.FormBox>
              {children}
              <S.SSL>
                <img src={SSL} alt="ssl icon" />
                <p>{t("form.secured")}</p>
              </S.SSL>
            </S.FormBox>
            <S.InfoBox>
              <img src={logo} alt="Logo" />
              <h2>{t("global.date")}</h2>
              <h4>{t("global.desc")}</h4>
              <img src={ptak} alt="Logo" />
            </S.InfoBox>
          </S.FormLayoutContent>
        </GS.Container>
      </S.FormLayoutWrapper>
      <FooterBar />
    </div>
  )
}

export default FormLayout
