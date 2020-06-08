import styled from "styled-components"
import { Container } from "styles/GlobalStyles"
import UKFlag from "images/uk.svg"
import PLFlag from "images/pl.svg"

export const Navbar = styled.div``

export const NavbarContent = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;

  img {
    width: 120px;
  }
`

export const OpenBtn = styled.button`
  width: 40px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  background: transparent;
  border: none;
  padding: 8px;
  box-sizing: content-box;
  cursor: pointer;

  div {
    width: 40px;
    height: 4px;
    background-color: white;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    display: none;
  }
`

export const CloseBtn = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  right: 6px;
  top: 24px;
  width: 32px;
  height: 32px;
  padding: 8px;
  box-sizing: content-box;
  cursor: pointer;

  & > div {
    position: relative;
    height: 100%;

    div {
      &::before,
      &::after {
        position: absolute;
        left: 15px;
        content: " ";
        height: 33px;
        width: 4px;
        background-color: white;
      }

      &::before {
        transform: rotate(45deg);
      }

      &::after {
        transform: rotate(-45deg);
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    display: none;
  }
`

export const Navigation = styled.nav`
  width: 100%;
  position: fixed;
  right: 0;
  top: 0;
  background: #1c1c1c;
  z-index: 2;
  transform: ${({ isActive }) =>
    isActive ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.4s ease;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 40px;
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 18px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 400px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    transform: translateX(0);
    background: transparent;
    position: static;
    width: auto;

    ul {
      flex-direction: row;
      min-height: auto;
      align-items: center;
    }

    li {
      margin: 0 20px 0 0;
    }

    a {
      font-weight: 400;
      font-size: 16px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
    li {
      margin: 0 30px 0 0;
    }
  }
`

export const NavigationContainer = styled(Container)`
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    width: auto;
    margin: auto;
  }
`

export const LanguageLink = styled.a`
  display: inline-block;
  margin-right: ${({ length }) => (length === 2 ? "0px" : "20px")};
`

export const EN = styled(UKFlag)`
  width: 40px;
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    width: 30px;
  }
`
export const PL = styled(PLFlag)`
  width: 40px;
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    width: 30px;
  }
`
