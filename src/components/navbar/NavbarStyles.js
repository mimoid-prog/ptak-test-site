import styled from "styled-components"
import { Container } from "styles/GlobalStyles"

export const Navbar = styled.div`
  padding-top: 10px;

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding-top: 20px;
  }
`

export const NavbarContent = styled.div`
  display: flex;
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
  width: 32px;
  height: 32px;
  background: transparent;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  padding: 0;

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
  height: 100%;
  position: fixed;
  right: 0;
  top: 0;
  background: #1c1c1c;
  z-index: 29;
  transform: ${({ isActive }) =>
    isActive ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.4s ease;
  overflow-y: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 400px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    transform: translateX(0);
    background: transparent;
    position: static;
    width: auto;
    overflow-y: initial;
  }
`

export const NavigationContainer = styled(Container)`
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    width: auto;
    margin: auto;
  }
`

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: left;
  list-style-type: none;
  margin: 0;
  padding: 35px 0 50px;

  li {
    margin-bottom: 40px;
    position: relative;

    &:last-child {
      margin: 0;
    }

    span {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .arrow-btn {
      background: none;
      border: none;
      padding: 4px 10px;
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    .arrow {
      width: 18px;
      transform: rotate(90deg);
    }
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 18px;
  }

  .flag {
    width: 30px;
    cursor: pointer;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    flex-direction: row;
    min-height: auto;
    align-items: center;
    padding: 0;

    li {
      margin: 0 20px 0 0;

      span {
        display: flex;
        justify-content: flex-start;
        flex-grow: 0;
      }

      .arrow-btn {
        padding: 0;
        margin-left: 8px;
        cursor: initial;
      }

      .arrow {
        width: 10px;
      }

      &:hover ul {
        display: block;
      }
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

export const Submenu = styled.ul`
  max-height: ${({ showSubmenu }) => (showSubmenu ? "1000px" : "0")};
  margin-top: ${({ showSubmenu }) => (showSubmenu ? "16px" : "0")};
  transition: max-height 0.5s ease, margin-top 0.2s ease;
  overflow: hidden;
  list-style-type: none;
  padding-left: 14px;

  li {
    margin: 0 0 16px;

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      background: #1c1c1c;
    }
  }

  a {
    font-size: 16px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    display: none;
    max-height: none;
    height: auto;
    margin-top: 0;
    padding: 16px 0 0;
    position: absolute;
    z-index: 99999;

    li {
      background: black;
      margin: 0;
      border-bottom: 1px solid #262626;

      &:last-child {
        border-bottom: none;
      }
    }

    a {
      white-space: nowrap;
      display: block;
      padding: 10px 16px;
    }
  }
`

export const LanguageLink = styled.a`
  display: inline-block;
  margin-right: ${({ length }) => (length === 2 ? "0px" : "20px")};
`
