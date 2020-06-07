import React, { useState } from "react"
import { useIntl, Link } from "gatsby-plugin-intl"
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
      </S.NavbarContent>
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
    </S.Navbar>
  )
}

export default Navbar
