import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import styled from "styled-components"

export const FooterBarWrapper = styled.div`
  width: 100%;
  background: #121212;
  color: white;
  display: flex;
  flex-direction: column-reverse;
  text-align: center;
  padding: 30px 0 40px;

  p {
    margin: 28px 0 0px;
  }

  ul {
    list-style-type: none;
  }

  li {
    margin-bottom: 14px;

    &:last-child {
      margin: 0;
    }
  }

  a {
    color: white;
  }
`

const FooterBar = () => {
  const intl = useIntl()

  return (
    <FooterBarWrapper>
      <p>© 2020 Ptak Warsaw Expo</p>
      <ul>
        <li>
          <a
            href="https://warsawexpo.eu/polityka-prywatnosci/"
            target="_blank"
            rel="noreferrer"
          >
            {intl.formatMessage({ id: "footer.linkOne" })}
          </a>
        </li>
        <li>
          <a
            href="https://warsawexpo.eu/wp-content/uploads/2019/08/Regulamin-obiektu-2019-TKFS-PL.pdf"
            target="_blank"
            rel="noreferrer"
          >
            {intl.formatMessage({ id: "footer.linkTwo" })}
          </a>
        </li>
      </ul>
    </FooterBarWrapper>
  )
}

export default FooterBar
