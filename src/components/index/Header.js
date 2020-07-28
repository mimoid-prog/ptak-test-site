import React from "react"
import * as S from "./HeaderStyles"
import { Container, PrimaryButton } from "styles/GlobalStyles"
import Navbar from "components/navbar/Navbar"
import Countdown from "react-countdown"
import { useTranslation } from "react-i18next"
import { LocalizedLink as Link } from "components/links/LocalizedLink"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const GS = {}
GS.Container = Container
GS.PrimaryButton = PrimaryButton

const Header = () => {
  const { t } = useTranslation()
  const timerDateInMiliseconds = new Date(t("home.timer.date")).getTime()

  const renderer = ({ days, hours, minutes, seconds }) => {
    if (days < 10) days = "0" + days
    if (hours < 10) hours = "0" + hours
    if (minutes < 10) minutes = "0" + minutes
    if (seconds < 10) seconds = "0" + seconds

    return (
      <span className="timer">
        <span>
          {days}
          {t("home.timer.days")}
        </span>
        <span>
          {hours}
          {t("home.timer.hours")}
        </span>
        <span>
          {minutes}
          {t("home.timer.minutes")}
        </span>
        <span>
          {seconds}
          {t("home.timer.seconds")}
        </span>
      </span>
    )
  }

  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 250, quality: 90) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      header: file(relativePath: { eq: "bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <S.Header fluid={data.header.childImageSharp.fluid}>
      <GS.Container>
        <Navbar />
        <Img
          fixed={data.logo.childImageSharp.fixed}
          alt="Warsaw Shop Expo Logo"
        />
        <h1>{t("global.name")}</h1>
        <h2>{t("global.date")}</h2>
        <GS.PrimaryButton as={Link} to="/visitor-registration">
          <span>{t("buttons.register")}</span>
          <span>{t("buttons.registerBottom")}</span>
        </GS.PrimaryButton>
        <h4>{t("home.tillTheFair")}</h4>
        <Countdown
          date={timerDateInMiliseconds}
          daysInHours={false}
          renderer={renderer}
        />
      </GS.Container>
    </S.Header>
  )
}

export default Header
