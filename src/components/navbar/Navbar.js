import React, { useState } from "react"
import {
  useIntl,
  Link,
  IntlContextConsumer,
  changeLocale,
} from "gatsby-plugin-intl"
import { PrimaryButton } from "styles/GlobalStyles"
import * as S from "./NavbarStyles"
import ptakLogo from "images/ptak-white.png"
import UKFlag from "images/icons/uk.svg"
import PLFlag from "images/icons/pl.svg"
import arrow from "images/icons/arrow.svg"

const GS = {}
GS.PrimaryButton = PrimaryButton

const Navbar = () => {
  const intl = useIntl()
  const [isActive, setIsActive] = useState(false)
  const [showSubmenu, setShowSubmenu] = useState({
    forVisitors: false,
    forExhibitors: false,
  })

  const changeIsActive = val => {
    if (val) document.body.classList.add("menu-active")
    else {
      document.body.classList.remove("menu-active")
      setShowSubmenu({
        forVisitors: false,
        forExhibitors: false,
      })
    }

    setIsActive(val)
  }

  return (
    <S.Navbar>
      <S.NavbarContent>
        <Link to="/">
          <img src={ptakLogo} alt="Ptak Warsaw Expo Logo" />
        </Link>
        <S.OpenBtn onClick={() => changeIsActive(true)}>
          <div></div>
          <div></div>
          <div></div>
        </S.OpenBtn>
        <S.Navigation isActive={isActive}>
          <S.NavigationContainer>
            <S.Menu>
              <li>
                <S.CloseBtn onClick={() => changeIsActive(false)}>
                  <div>
                    <div></div>
                  </div>
                </S.CloseBtn>
              </li>
              <li>
                <Link to="/">{intl.formatMessage({ id: "home.title" })}</Link>
              </li>
              <li>
                <span>
                  <Link to="/for-visitors">
                    {intl.formatMessage({ id: "forVisitors.title" })}
                  </Link>
                  <button className="arrow-btn">
                    <img
                      src={arrow}
                      alt="arrow"
                      className="arrow"
                      onClick={() =>
                        setShowSubmenu({
                          forVisitors: !showSubmenu.forVisitors,
                          forExhibitors: showSubmenu.forExhibitors,
                        })
                      }
                    />
                  </button>
                </span>
                <S.Submenu showSubmenu={showSubmenu.forVisitors}>
                  <li>
                    <Link to="/visitor-registration">
                      {intl.formatMessage({ id: "visitorRegistration.title" })}
                    </Link>
                  </li>
                  <li>
                    <Link to="/exhibitors-catalog">
                      {intl.formatMessage({ id: "exhibitorsCatalog.title" })}
                    </Link>
                  </li>
                  <li>
                    <a
                      href={intl.formatMessage({ id: "hostedBuyers.link" })}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {intl.formatMessage({ id: "hostedBuyers.title" })}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://warsawexpo.eu/baza-hotelowa/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {intl.formatMessage({ id: "hotels.title" })}
                    </a>
                  </li>
                </S.Submenu>
              </li>
              <li>
                <span>
                  <Link to="/for-exhibitors" className="with-arrow">
                    {intl.formatMessage({ id: "forExhibitors.title" })}
                  </Link>
                  <button className="arrow-btn">
                    <img
                      src={arrow}
                      alt="arrow"
                      className="arrow"
                      onClick={() =>
                        setShowSubmenu({
                          forVisitors: showSubmenu.forVisitors,
                          forExhibitors: !showSubmenu.forExhibitors,
                        })
                      }
                    />
                  </button>
                </span>
                <S.Submenu showSubmenu={showSubmenu.forExhibitors}>
                  <li>
                    <Link to="/exhibitor-registration">
                      {intl.formatMessage({
                        id: "exhibitorRegistration.title",
                      })}
                    </Link>
                  </li>
                </S.Submenu>
              </li>
              <li>
                <Link to="/contact">
                  {intl.formatMessage({ id: "contact.title" })}
                </Link>
              </li>
              <li>
                <GS.PrimaryButton to="/exhibitor-registration">
                  {intl.formatMessage({ id: "buttons.becomeAnExhibitor" })}
                </GS.PrimaryButton>
              </li>
              <li>
                <IntlContextConsumer>
                  {({ languages, language: currentLocale }) =>
                    languages.map((language, i) => (
                      <React.Fragment key={i}>
                        {language !== currentLocale && (
                          <S.LanguageLink
                            key={language}
                            onClick={() => changeLocale(language)}
                            length={languages.length}
                          >
                            {language === "pl" && (
                              <img src={PLFlag} className="flag" alt="flag" />
                            )}
                            {language === "en" && (
                              <img src={UKFlag} className="flag" alt="flag" />
                            )}
                          </S.LanguageLink>
                        )}
                      </React.Fragment>
                    ))
                  }
                </IntlContextConsumer>
              </li>
            </S.Menu>
          </S.NavigationContainer>
        </S.Navigation>
      </S.NavbarContent>
    </S.Navbar>
  )
}

export default Navbar
