import React from "react"
import * as S from "./FooterStyles"
import { Container } from "styles/GlobalStyles"
import FooterBar from "./FooterBar"
import img1 from "images/footer/footer-img-1.jpg"
import img2 from "images/footer/footer-img-2.jpg"
import img3 from "images/footer/footer-img-3.jpg"
import img4 from "images/footer/footer-img-4.jpg"
import img5 from "images/footer/footer-img-5.jpg"
import img6 from "images/footer/footer-img-6.jpg"
import logo from "images/ptak-logo-white.png"
import team from "images/icons/team.svg"
import graph from "images/icons/graph.svg"
import plane from "images/icons/plane.svg"
import bulb from "images/icons/lamp.svg"
import { useTranslation, Trans } from "react-i18next"
import { useStaticQuery, graphql } from "gatsby"

const GS = {}
GS.Container = Container

const Footer = () => {
  const { t } = useTranslation()

  const data = useStaticQuery(graphql`
    query {
      footer: file(relativePath: { eq: "footer/footer-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <S.Footer>
      <S.Bg fluid={data.footer.childImageSharp.fluid}>
        <S.Content>
          <GS.Container>
            <img src={logo} alt="Ptak Warsaw Expo logo" />
            <h2>{t("footer.headingOne")}</h2>
            <h3>{t("footer.headingTwo")}</h3>
            <ul>
              <li>
                <img src={team} className="icon" alt={t("alts.icons.team")} />
                <Trans>{"footer.listItemOne"}</Trans>
              </li>
              <li>
                <img src={graph} className="icon" alt={t("alts.icons.graph")} />
                <Trans>{"footer.listItemTwo"}</Trans>
              </li>
              <li>
                <img src={plane} className="icon" alt={t("alts.icons.plane")} />
                <Trans>{"footer.listItemThree"}</Trans>
              </li>
              <li>
                <img src={bulb} className="icon" alt={t("alts.icons.bulb")} />
                <Trans>{"footer.listItemFour"}</Trans>
              </li>
            </ul>
          </GS.Container>
        </S.Content>
      </S.Bg>
      <S.Photos>
        <img src={img1} alt="ptak" />
        <img src={img2} alt="ptak" />
        <img src={img3} alt="ptak" />
        <img src={img4} alt="ptak" />
        <img src={img5} alt="ptak" />
        <img src={img6} alt="ptak" />
      </S.Photos>
      <FooterBar />
    </S.Footer>
  )
}

export default Footer
