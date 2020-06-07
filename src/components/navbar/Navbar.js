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

const Navbar = () => {
  const intl = useIntl()
  const [isActive, setIsActive] = useState(false)

  return (
    <S.Navbar>
      <S.NavbarContent>
        <img src={ptakLogo} alt="Ptak Warsaw Expo Logo" />
        <S.OpenBtn onClick={() => setIsActive(true)}>
          <div></div>
          <div></div>
          <div></div>
        </S.OpenBtn>
        <S.Navigation isActive={isActive}>
          <S.NavigationContainer>
            <ul>
              <li>
                <Link to="/page-2">
                  {intl.formatMessage({ id: "home.title" })}
                </Link>
              </li>
              <li>
                <Link to="/page-2">
                  {intl.formatMessage({ id: "forVisitors.title" })}
                </Link>
              </li>
              <li>
                <Link to="/page-2">
                  {intl.formatMessage({ id: "forExhibitors.title" })}
                </Link>
              </li>
              <li>
                <Link to="/page-2">
                  {intl.formatMessage({ id: "contact.title" })}
                </Link>
              </li>
              <li>
                <PrimaryButton as="a" to="/page-2">
                  {intl.formatMessage({ id: "buttons.becomeAnExhibitor" })}
                </PrimaryButton>
              </li>
              <li>
                <IntlContextConsumer>
                  {({ languages, language: currentLocale }) => {
                    console.log(languages.length, currentLocale)
                    return languages.map((language, i) => (
                      <>
                        {language !== currentLocale && (
                          <S.LanguageLink
                            key={language}
                            onClick={() => changeLocale(language)}
                            length={languages.length}
                          >
                            {language === "pl" && <S.PL />}
                            {language === "en" && <S.EN />}
                          </S.LanguageLink>
                        )}
                      </>
                    ))
                  }}
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
