import React from "react"
import * as S from "./SecondaryLayoutStyles"
import { useIntl } from "gatsby-plugin-intl"
import { Container } from "styles/GlobalStyles"
import Navbar from "components/navbar/Navbar"
import MainLayout from "layouts/MainLayout"
import FooterBar from "components/footer/FooterBar"
import Logo from "images/logo.png"

const GS = {}
GS.Container = Container

const SecondaryLayout = ({ children }) => {
  const intl = useIntl()

  return (
    <MainLayout>
      <S.Header>
        <GS.Container>
          <Navbar />
          <S.HeaderInner>
            <div>
              <S.Logo src={Logo} alt="Warsaw Shop Expo Logo" />
            </div>
            <div>
              <h1>{intl.formatMessage({ id: "global.name" })}</h1>
              <h2>{intl.formatMessage({ id: "global.date" })}</h2>
            </div>
          </S.HeaderInner>
        </GS.Container>
      </S.Header>
      <S.Content>
        <GS.Container>{children}</GS.Container>
      </S.Content>
      <FooterBar />
    </MainLayout>
  )
}

export default SecondaryLayout
