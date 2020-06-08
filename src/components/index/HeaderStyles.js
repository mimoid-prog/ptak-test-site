import styled from "styled-components"
import headerBg from "images/header-bg.jpg"

export const Header = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${headerBg});
  text-align: center;
  color: white;
  padding: 10px 0 40px;

  h2 {
    margin-bottom: 40px;
  }

  h4 {
    margin-bottom: 5px;
  }

  .timer {
    margin-top: 20px;

    span {
      margin-right: 6px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    h1 {
      font-size: 2.5em;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding: 20px 0 60px;

    h1 {
      font-size: 3em;
    }

    h2 {
      font-size: 2em;
    }

    h4 {
      font-size: 1.2em;
    }

    .timer {
      font-size: 1.2em;
    }
  }
`
export const Logo = styled.img`
  max-width: 250px;

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    margin-top: 30px;
    max-width: 300px;
  }
`
