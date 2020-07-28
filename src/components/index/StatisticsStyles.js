import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

export const Statistics = styled(BackgroundImage)`
  opacity: 1 !important;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  background-size: cover;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-bottom: 60px;
  }
`

export const StatisticsInner = styled.div`
  background: white;
  padding: 30px;
  transform: translateY(-30px);
  text-align: center;
  box-shadow: 2px -5px 15px 0px rgba(0, 0, 0, 0.15);

  .statistics-box {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 20px 0;
  }

  h3 {
    margin-top: 0;
  }

  .buttons-box {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
      width: 70%;
    }

    a:first-child {
      margin-bottom: 10px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 450px;
    margin: 0 auto;
    padding: 50px 30px;

    .buttons-box {
      flex-direction: row;

      a:first-child {
        margin-bottom: 0;
        margin-right: 10px;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    h3 {
      margin-bottom: 1.2em;
    }
  }
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin: 8px 0 0;
    text-align: center;

    span:first-child {
      font-weight: 700;
    }

    span:last-child {
      display: block;
    }
  }

  img {
    width: 60px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    p {
      margin-top: 12px;

      span:first-child {
        font-size: 1.2em;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    img {
      width: 70px;
    }
  }
`
