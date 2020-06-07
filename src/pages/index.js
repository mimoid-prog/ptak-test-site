import React from "react"
import styled from "styled-components"
import {
  useIntl,
  Link,
  IntlContextConsumer,
  changeLocale,
} from "gatsby-plugin-intl"

import MainLayout from "layouts/MainLayout"
import Image from "components/image"
import SEO from "utils/seo"

import Header from "components/index/Header"
import StickyBar from "components/index/StickyBar"

const languageName = {
  pl: "Polski",
  en: "English",
}

const Text = styled.p`
  font-size: 50px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`

const IndexPage = () => {
  const intl = useIntl()

  return (
    <MainLayout>
      <SEO
        title={`${intl.formatMessage({
          id: "global.name",
        })} - ${intl.formatMessage({ id: "home.title" })}`}
      />
      <Header />
      <StickyBar />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Text>{intl.formatMessage({ id: "global.date" })}</Text>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <a
              key={language}
              onClick={() => changeLocale(language)}
              style={{
                color: currentLocale === language ? `red` : `black`,
                cursor: `pointer`,
              }}
            >
              {languageName[language]}
            </a>
          ))
        }
      </IntlContextConsumer>
    </MainLayout>
  )
}

export default IndexPage
