import React from "react"
import * as S from "./IntroductionStyles"
import { useTranslation } from "react-i18next"
import { Container, SecondaryTitle } from "styles/GlobalStyles"
import img1 from "images/photos/home-image-1.jpg"
import img2 from "images/photos/home-image-2.jpg"

const GS = {}
GS.Container = Container
GS.SecondaryTitle = SecondaryTitle

const Introduction = () => {
  const { t } = useTranslation()

  return (
    <S.Introduction>
      <GS.Container>
        <S.IntroductionInner>
          <div>
            <div>
              <img src={img1} alt="essa" />
            </div>
            <div>
              <img src={img2} alt="essa" />
            </div>
          </div>
          <div>
            <GS.SecondaryTitle>{t("home.aboutTitle")}</GS.SecondaryTitle>
            <p>{t("home.aboutText")}</p>
          </div>
        </S.IntroductionInner>
      </GS.Container>
    </S.Introduction>
  )
}

export default Introduction
