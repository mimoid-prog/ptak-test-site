import styled from "styled-components"
import { Container } from "styles/GlobalStyles"

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

  div {
    width: 40px;
    height: 4px;
    background-color: white;
  }
`

export const CloseBtn = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  right: 0;
  top: 24px;
  width: 32px;
  height: 32px;
  padding: 8px;
  box-sizing: content-box;

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
`

export const Navigation = styled.nav`
  width: 100%;
  position: fixed;
  right: 0;
  top: 0;
  background: black;
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
    margin-bottom: 50px;
  }

  a {
    color: white;
    font-weight: 700;
    text-decoration: none;
    font-size: 18px;
  }
`

export const NavigationContainer = styled(Container)`
  position: relative;
`
