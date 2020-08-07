import React, { useState } from "react"
import { PrimaryButton } from "styles/GlobalStyles"
import * as S from "./NavbarStyles"
import ptakLogo from "images/ptak-white.png"
import UKFlag from "images/icons/uk.svg"
import PLFlag from "images/icons/pl.svg"
import arrow from "images/icons/arrow.svg"
import { useTranslation } from "react-i18next"
import { LocalizedLink as Link } from "components/links/LocalizedLink"
import LanguageLink from "components/links/LanguageLink"
import LocaleContext from "src/localeContext"
const locales = require("i18n/locales")
const pages = require("i18n/pages")

const GS = {}
GS.PrimaryButton = PrimaryButton

const Navbar = () => {
  const { t } = useTranslation()

  const { locale, pageSlug } = React.useContext(LocaleContext)

  const pageLanguages = pages[pageSlug]

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
                <Link to="/">{t("home.title")}</Link>
              </li>
              <li>
                <span>
                  <Link to="/for-visitors">{t("forVisitors.title")}</Link>
                  <button
                    className="arrow-btn"
                    onClick={() =>
                      setShowSubmenu({
                        forVisitors: !showSubmenu.forVisitors,
                        forExhibitors: showSubmenu.forExhibitors,
                      })
                    }
                  >
                    <img src={arrow} alt="arrow" className="arrow" />
                  </button>
                </span>
                <S.Submenu showSubmenu={showSubmenu.forVisitors}>
                  <ul>
                    <li>
                      <Link to="/visitor-registration">
                        {t("visitorRegistration.title")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/exhibitors-catalog">
                        {t("exhibitorsCatalog.title")}
                      </Link>
                    </li>
                    <li>
                      <a
                        href={t("hostedBuyers.link")}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {t("hostedBuyers.title")}
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://warsawexpo.eu/baza-hotelowa/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {t("hotels.title")}
                      </a>
                    </li>
                  </ul>
                </S.Submenu>
              </li>
              <li>
                <span>
                  <Link to="/for-exhibitors" className="with-arrow">
                    {t("forExhibitors.title")}
                  </Link>
                  <button
                    className="arrow-btn"
                    onClick={() =>
                      setShowSubmenu({
                        forVisitors: showSubmenu.forVisitors,
                        forExhibitors: !showSubmenu.forExhibitors,
                      })
                    }
                  >
                    <img src={arrow} alt="arrow" className="arrow" />
                  </button>
                </span>
                <S.Submenu showSubmenu={showSubmenu.forExhibitors}>
                  <ul>
                    <li>
                      <Link to="/exhibitor-registration">
                        {t("exhibitorRegistration.title")}
                      </Link>
                    </li>
                  </ul>
                </S.Submenu>
              </li>
              <li>
                <Link to="/contact">{t("contact.title")}</Link>
              </li>
              <li>
                <GS.PrimaryButton to="/exhibitor-registration">
                  {t("buttons.becomeAnExhibitor")}
                </GS.PrimaryButton>
              </li>
              <li>
                {Object.keys(pageLanguages).map((lang, i) => (
                  <React.Fragment key={i}>
                    {lang !== locale && pages[pageSlug][lang].active === true && (
                      <LanguageLink lang={lang} style={{ marginRight: "12px" }}>
                        {lang === "pl" && (
                          <img src={PLFlag} className="flag" alt="flag" />
                        )}
                        {lang === "en" && (
                          <img src={UKFlag} className="flag" alt="flag" />
                        )}
                      </LanguageLink>
                    )}
                  </React.Fragment>
                ))}
              </li>
            </S.Menu>
          </S.NavigationContainer>
        </S.Navigation>
      </S.NavbarContent>
    </S.Navbar>
  )
}

export default Navbar
