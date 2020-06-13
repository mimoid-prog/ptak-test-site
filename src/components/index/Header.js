import React from "react"
import * as S from "./HeaderStyles"
import { Container, PrimaryButton } from "styles/GlobalStyles"
import { useIntl, Link } from "gatsby-plugin-intl"
import Navbar from "components/navbar/Navbar"
import Logo from "images/logo.png"
import Countdown from "react-countdown"

const GS = {}
GS.Container = Container
GS.PrimaryButton = PrimaryButton

const Header = () => {
  const intl = useIntl()
  const timerDateInMiliseconds = new Date(
    intl.formatMessage({ id: "home.timer.date" })
  ).getTime()

  const renderer = ({ days, hours, minutes, seconds }) => {
    if (days < 10) days = "0" + days
    if (hours < 10) hours = "0" + hours
    if (minutes < 10) minutes = "0" + minutes
    if (seconds < 10) seconds = "0" + seconds

    return (
      <span className="timer">
        <span>
          {days}
          {intl.formatMessage({ id: "home.timer.days" })}
        </span>
        <span>
          {hours}
          {intl.formatMessage({ id: "home.timer.hours" })}
        </span>
        <span>
          {minutes}
          {intl.formatMessage({ id: "home.timer.minutes" })}
        </span>
        <span>
          {seconds}
          {intl.formatMessage({ id: "home.timer.seconds" })}
        </span>
      </span>
    )
  }

  return (
    <S.Header>
      <GS.Container>
        <Navbar />
        <S.Logo src={Logo} alt="Warsaw Shop Expo Logo" />
        <h1>{intl.formatMessage({ id: "global.name" })}</h1>
        <h2>{intl.formatMessage({ id: "global.date" })}</h2>
        <GS.PrimaryButton as={Link} to="/visitor-registration">
          <span>{intl.formatMessage({ id: "buttons.register" })}</span>
          <span>{intl.formatMessage({ id: "buttons.registerBottom" })}</span>
        </GS.PrimaryButton>
        <h4>{intl.formatMessage({ id: "home.tillTheFair" })}</h4>
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
