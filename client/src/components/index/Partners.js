import React from "react"
import * as S from "./PartnersStyles.js"
import { Container, TertiaryTitle } from "styles/GlobalStyles"
import Swiper from "react-id-swiper"
import "swiper/swiper-bundle.min.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useTranslation } from "react-i18next"

const GS = {}
GS.Container = Container
GS.TertiaryTitle = TertiaryTitle

const Partners = () => {
  const { t } = useTranslation()

  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "partners" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const params = {
    slidesPerView: 8,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      1440: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
  }

  return (
    <S.Partners>
      <GS.Container>
        <GS.TertiaryTitle>{t("home.partners")}</GS.TertiaryTitle>
        <Swiper {...params}>
          {data.allFile.edges.map((image, i) => (
            <S.Slide key={i}>
              <Img
                fluid={image.node.childImageSharp.fluid}
                alt={t(`alts.partners.${i}`)}
              />
            </S.Slide>
          ))}
        </Swiper>
      </GS.Container>
    </S.Partners>
  )
}

export default Partners
