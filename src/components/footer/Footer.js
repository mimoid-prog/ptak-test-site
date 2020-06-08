import React from "react"
import { useIntl, FormattedHTMLMessage } from "gatsby-plugin-intl"
import * as S from "./FooterStyles"
import { Container } from "styles/GlobalStyles"
import img1 from "images/footer-img-1.jpg"
import img2 from "images/footer-img-2.jpg"
import img3 from "images/footer-img-3.jpg"
import img4 from "images/footer-img-4.jpg"
import img5 from "images/footer-img-5.jpg"
import img6 from "images/footer-img-6.jpg"
import logo from "images/ptak-logo-white.png"
import Icon1 from "images/team.svg"
import Icon2 from "images/graph.svg"
import Icon3 from "images/plane.svg"
import Icon4 from "images/lamp.svg"

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
              <Icon1 />
              <FormattedHTMLMessage id="footer.listItemOne" />
            </li>
            <li>
              <Icon2 />
              <FormattedHTMLMessage id="footer.listItemTwo" />
            </li>
            <li>
              <Icon3 />
              <FormattedHTMLMessage id="footer.listItemThree" />
            </li>
            <li>
              <Icon4 />
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
      <S.BottomBar>
        <p>© 2020 Ptak Warsaw Expo</p>
        <ul>
          <li>
            <a href="#">{intl.formatMessage({ id: "footer.linkOne" })}</a>
          </li>
          <li>
            <a href="#">{intl.formatMessage({ id: "footer.linkTwo" })}</a>
          </li>
        </ul>
      </S.BottomBar>
    </S.Footer>
  )
}

export default Footer
