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

console.log(UKFlag)
const GS = {}
GS.PrimaryButton = PrimaryButton

const Navbar = () => {
  const intl = useIntl()
  const [isActive, setIsActive] = useState(false)

  return (
    <S.Navbar>
      <S.NavbarContent>
        <Link to="/">
          <img src={ptakLogo} alt="Ptak Warsaw Expo Logo" />
        </Link>
        <S.OpenBtn onClick={() => setIsActive(true)}>
          <div></div>
          <div></div>
          <div></div>
        </S.OpenBtn>
        <S.Navigation isActive={isActive}>
          <S.NavigationContainer>
            <ul>
              <li>
                <Link to="/">{intl.formatMessage({ id: "home.title" })}</Link>
              </li>
              <li>
                <Link to="/for-visitors">
                  {intl.formatMessage({ id: "forVisitors.title" })}
                </Link>
              </li>
              <li>
                <Link to="/for-exhibitors">
                  {intl.formatMessage({ id: "forExhibitors.title" })}
                </Link>
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
            </ul>
            <S.CloseBtn
              onClick={() => setIsActive(false)}
              style={{ color: "white" }}
            >
              <div>
                <div></div>
              </div>
            </S.CloseBtn>
          </S.NavigationContainer>
        </S.Navigation>
      </S.NavbarContent>
    </S.Navbar>
  )
}

export default Navbar
