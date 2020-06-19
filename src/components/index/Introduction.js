import React from "react"
import * as S from "./IntroductionStyles"
import { useIntl } from "gatsby-plugin-intl"
import { Container, SecondaryTitle } from "styles/GlobalStyles"
import img1 from "images/photos/home-image-1.jpg"
import img2 from "images/photos/home-image-2.jpg"

const GS = {}
GS.Container = Container
GS.SecondaryTitle = SecondaryTitle

const Introduction = () => {
  const intl = useIntl()

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
            <GS.SecondaryTitle>
              {intl.formatMessage({ id: "home.aboutTitle" })}
            </GS.SecondaryTitle>
            <p>{intl.formatMessage({ id: "home.aboutText" })}</p>
          </div>
        </S.IntroductionInner>
      </GS.Container>
    </S.Introduction>
  )
}

export default Introduction
