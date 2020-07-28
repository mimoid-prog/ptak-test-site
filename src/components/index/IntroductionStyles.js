import styled from "styled-components"

export const Introduction = styled.div`
  margin-bottom: 40px;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-bottom: 100px;
  }
`

export const IntroductionInner = styled.div`
  h2 {
    margin-top: 40px;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
  }

  & > div:first-child {
    display: grid;
    grid-template-columns: 20px 230px 20px;
    grid-template-rows: 20px 380px 20px;
    width: 270px;
    margin: 0 auto;

    div:first-child {
      grid-column: 1 / 3;
      grid-row: 1 / 3;
    }

    div:last-child {
      grid-column: 2 / 4;
      grid-row: 2 / 4;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    & > div:first-child {
      grid-template-columns: 70px 180px 70px;
      grid-template-rows: 40px 360px 40px;

      div:first-child {
        grid-column: 1 / 3;
      }

      div:last-child {
        grid-column: 2 / 4;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    padding-top: 20px;

    h2 {
      margin: 0;
    }

    & > div:first-child {
      margin-right: 40px;
      grid-template-columns: 250px 20px 250px;
      margin-left: 0;
      width: 520px;

      div:first-child {
        grid-column: 1 / 2;
      }

      div:last-child {
        grid-column: 3 / 4;
      }
    }

    & > div:last-child {
      width: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 40px 0;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    & > div:first-child {
      margin-right: 60px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
    & > div:last-child {
      padding: 80px 0;
    }
  }
`
