import React from "react"
import * as S from "./IntroductionStyles"
import { useTranslation } from "react-i18next"
import { Container, SecondaryTitle } from "styles/GlobalStyles"
import img1 from "images/photos/photo1.webp"
import img2 from "images/photos/photo2.webp"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const GS = {}
GS.Container = Container
GS.SecondaryTitle = SecondaryTitle

const Introduction = () => {
  const { t } = useTranslation()

  const images = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "photos/home-image-1.jpg" }) {
        childImageSharp {
          fixed(width: 250, height: 400, quality: 90) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      image2: file(relativePath: { eq: "photos/home-image-2.jpg" }) {
        childImageSharp {
          fixed(width: 250, height: 400, quality: 90) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  console.log(images)

  return (
    <S.Introduction>
      <GS.Container>
        <S.IntroductionInner>
          <div>
            <div>
              <Img fixed={images.image1.childImageSharp.fixed} />
            </div>
            <div>
              <Img fixed={images.image2.childImageSharp.fixed} />
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
