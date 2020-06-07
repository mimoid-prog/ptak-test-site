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
`
export const Logo = styled.img`
  max-width: 250px;
`
