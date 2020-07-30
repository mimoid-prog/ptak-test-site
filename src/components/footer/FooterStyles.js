import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

export const Footer = styled.footer``

export const Bg = styled(BackgroundImage)`
  opacity: 1 !important;
  background-repeat: no-repeat;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  background-size: cover;
`

export const Content = styled.div`
  color: white;
  padding: 30px 0 40px;

  img {
    width: 120px;
  }

  h2 {
    font-size: 1.2em;
    margin-top: 30px;
  }

  h3 {
    color: #c5a25c;
    text-transform: uppercase;
    font-size: 2.6em;
    margin-top: 0.5em;
    margin-bottom: 26px;
  }

  ul {
    list-style-type: none;
  }

  li {
    margin-bottom: 10px;
    display: flex;
    align-items: center;

    &:last-child {
      margin-bottom: 0;
    }

    span {
      display: block;
    }
  }

  .icon {
    height: 50px;
    width: 50px;
    margin-right: 14px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    text-align: center;

    ul {
      display: inline-block;
      text-align: left;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    h3 {
      font-size: 3.4em;
      margin-bottom: 0.8em;
    }

    ul {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    li {
      flex-direction: column;
      text-align: center;
      align-items: center;
    }

    .icon {
      margin-right: 0;
      margin-bottom: 6px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    text-align: left;

    h2 {
      font-size: 1.5em;
    }

    h3 {
      font-size: 4.2em;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding: 45px 0 60px;

    h3 {
      font-size: 5.2em;
    }

    li {
      flex-direction: row;
      justify-content: center;
      text-align: left;
      margin-bottom: 0;
    }

    .icon {
      margin-right: 14px;
      margin-bottom: 0;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
    text-align: center;
    padding: 60px 0 80px;
    background-size: cover;

    h3 {
      font-size: 6em;
    }

    li {
      font-size: 1.1em;
    }

    .icon {
      height: 60px;
    }
  }
`

export const Photos = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    overflow: hidden;

    img {
      width: 100%;
      border: 1px solid white;
    }
  }
`
