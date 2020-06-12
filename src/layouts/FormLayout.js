import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import Navbar from "components/navbar/Navbar"
import FooterBar from "components/footer/FooterBar"
import MainLayout from "layouts/MainLayout"
import { Container } from "styles/GlobalStyles"
import * as S from "./FormLayoutStyles"
import SSL from "images/ssl.png"
import logo from "images/logo.png"
import ptak from "images/ptak-logo-white.png"

const GS = {}
GS.Container = Container

const FormLayout = ({ children }) => {
  const intl = useIntl()

  return (
    <MainLayout>
      <S.FormLayoutWrapper>
        <GS.Container>
          <Navbar />
          <S.FormLayoutContent>
            <S.FormBox>
              {children}
              <S.SSL>
                <img src={SSL} alt="ssl icon" />
                <p>{intl.formatMessage({ id: "form.secured" })}</p>
              </S.SSL>
            </S.FormBox>
            <S.InfoBox>
              <img src={logo} alt="Logo" />
              <h2>{intl.formatMessage({ id: "global.date" })}</h2>
              <h4>{intl.formatMessage({ id: "global.desc" })}</h4>
              <img src={ptak} alt="Logo" />
            </S.InfoBox>
          </S.FormLayoutContent>
        </GS.Container>
      </S.FormLayoutWrapper>
      <FooterBar />
    </MainLayout>
  )
}

export default FormLayout
