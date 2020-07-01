import React from "react"
import * as S from "./SecondaryLayoutStyles"
import { Container } from "styles/GlobalStyles"
import Navbar from "components/navbar/Navbar"
import FooterBar from "components/footer/FooterBar"
import Logo from "images/logo.png"
import { useTranslation } from "react-i18next"

const GS = {}
GS.Container = Container

const SecondaryLayout = ({ children }) => {
  const { t } = useTranslation()

  return (
    <div>
      <S.SecondaryLayout>
        <S.Header>
          <GS.Container>
            <Navbar />
            <S.HeaderInner>
              <div>
                <S.Logo src={Logo} alt="Warsaw Shop Expo Logo" />
              </div>
              <div>
                <h1>{t("global.name")}</h1>
                <h2>{t("global.date")}</h2>
              </div>
            </S.HeaderInner>
          </GS.Container>
        </S.Header>
        <S.Content>{children}</S.Content>
        <FooterBar />
      </S.SecondaryLayout>
    </div>
  )
}

export default SecondaryLayout
