import styled from "styled-components"
import headerBg from "images/header-bg.jpg"

export const FormLayoutWrapper = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${headerBg});
  padding-bottom: 40px;

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding-bottom: 60px;
  }
`

export const FormLayoutContent = styled.div`
  padding: 20px 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    & > div:first-child {
      width: 420px;
      margin: 0 auto;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    justify-content: center;
    padding: 80px 0;

    & > div:first-child {
      margin: 0;
    }

    & > div {
      width: 420px;
    }
  }
`

export const FormBox = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;

  h2 {
    margin: 0;
  }

  h4,
  & > p {
    margin-top: 8px;
  }
`

export const InfoBox = styled.div`
  color: white;
  margin-top: 30px;
  text-align: center;

  img:first-of-type {
    max-width: 200px;
  }

  img:last-of-type {
    width: 80px;
  }

  h2 {
    margin: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    text-align: left;
    margin-top: 0;
    padding-left: 40px;

    h2 {
      font-size: 2em;
    }

    h4 {
      font-size: 1.2em;
      margin-top: 0.5em;
    }
  }
`

export const SSL = styled.div`
  background: #ededed;
  padding: 6px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  text-align: right;
  color: #828282;
  margin-top: 20px;

  p {
    margin: 0;
    display: inline-block;
  }

  img {
    width: 50px;
  }
`
