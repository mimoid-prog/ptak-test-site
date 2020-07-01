import styled from "styled-components"
import headerBg from "images/header-bg.jpg"

export const SecondaryLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${headerBg});
  text-align: center;
  color: white;
  padding-bottom: 40px;
`

export const HeaderInner = styled.div`
  h1 {
    margin-top: 10px;
  }

  h2 {
    margin-bottom: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 30px;

    div:first-child {
      margin-right: 20px;
    }

    h1 {
      margin-bottom: 12px;
      margin-top: 0;
    }

    h2 {
      margin-top: 0px;
    }
  }
`

export const Content = styled.div`
  padding: 20px 0 40px;
  flex: 1 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 40px 0 60px;
  }
`

export const Logo = styled.img`
  max-width: 200px;

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    max-width: 250px;
  }
`
