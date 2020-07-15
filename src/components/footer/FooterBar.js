import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { useStaticQuery, graphql } from "gatsby"

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
  const { t } = useTranslation()

  const data = useStaticQuery(graphql`
    query {
      allMongodbPtakGlobals {
        edges {
          node {
            label
            name
            value
          }
        }
      }
    }
  `).allMongodbPtakGlobals.edges

  const linkPrivacy = data.filter(
    item => item.node.name === "link-privacy-pl"
  )[0].node.value

  const linkFacilityRegulations = data.filter(
    item => item.node.name === "link-facility-regulations-pl"
  )[0].node.value

  return (
    <FooterBarWrapper>
      <p>© 2020 Ptak Warsaw Expo</p>
      <ul>
        <li>
          <a href={linkPrivacy} target="_blank" rel="noreferrer">
            {t("footer.linkOne")}
          </a>
        </li>
        <li>
          <a href={linkFacilityRegulations} target="_blank" rel="noreferrer">
            {t("footer.linkTwo")}
          </a>
        </li>
      </ul>
    </FooterBarWrapper>
  )
}

export default FooterBar
