import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { Normalize } from "styled-normalize"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import colors from "styles/colors"
import breakpoints from "styles/breakpoints"
import withI18next from "../i18n/withI18next"
import { useTranslation } from "react-i18next"

import poppinsRegularWOFF2 from "fonts/Poppins-Regular.woff2"
import poppinsRegularWOFF from "fonts/Poppins-Regular.woff"
import poppinsRegularTTF from "fonts/Poppins-Regular.ttf"
import poppinsRegularEOT from "fonts/Poppins-Regular.eot"

import poppinsBoldWOFF2 from "fonts/Poppins-Bold.woff2"
import poppinsBoldWOFF from "fonts/Poppins-Bold.woff"
import poppinsBoldTTF from "fonts/Poppins-Bold.ttf"
import poppinsBoldEOT from "fonts/Poppins-Bold.eot"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    src: 
      url(${poppinsRegularWOFF2}) format('woff2'),
      url(${poppinsRegularWOFF}) format('woff'),
      url(${poppinsRegularTTF}) format('ttf'),
      url(${poppinsRegularEOT}) format('eot');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    src:
      url(${poppinsBoldWOFF2}) format('woff2'),
      url(${poppinsBoldWOFF}) format('woff'),
      url(${poppinsBoldTTF}) format('ttf'),
      url(${poppinsBoldEOT}) format('eot');
  }

  body {
    font-family: "Poppins";
  }

  ul {
    list-style-position: inside;
    margin: 0;
    padding: 0;
  }

  .menu-active {
    overflow: hidden;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      overflow: auto;
    }
  }
`

const theme = {
  colors,
  breakpoints,
}

const Layout = ({ children, location, pageContext: { locale } }) => {
  const { i18n } = useTranslation()

  useEffect(() => {
    i18n.changeLanguage(locale)
  }, [location, i18n, locale])

  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withI18next()(Layout)
