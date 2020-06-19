import React from "react"
import { useIntl, FormattedHTMLMessage } from "gatsby-plugin-intl"
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

const GS = {}
GS.Container = Container

const Footer = () => {
  const intl = useIntl()

  return (
    <S.Footer>
      <S.Content>
        <GS.Container>
          <img src={logo} alt="Ptak Warsaw Expo logo" />
          <h2>{intl.formatMessage({ id: "footer.headingOne" })}</h2>
          <h3>{intl.formatMessage({ id: "footer.headingTwo" })}</h3>
          <ul>
            <li>
              <img
                src={team}
                className="icon"
                alt={intl.formatMessage({ id: "alts.icons.team" })}
              />
              <FormattedHTMLMessage id="footer.listItemOne" />
            </li>
            <li>
              <img
                src={graph}
                className="icon"
                alt={intl.formatMessage({ id: "alts.icons.graph" })}
              />
              <FormattedHTMLMessage id="footer.listItemTwo" />
            </li>
            <li>
              <img
                src={plane}
                className="icon"
                alt={intl.formatMessage({ id: "alts.icons.plane" })}
              />
              <FormattedHTMLMessage id="footer.listItemThree" />
            </li>
            <li>
              <img
                src={bulb}
                className="icon"
                alt={intl.formatMessage({ id: "alts.icons.bulb" })}
              />
              <FormattedHTMLMessage id="footer.listItemFour" />
            </li>
          </ul>
        </GS.Container>
      </S.Content>
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
