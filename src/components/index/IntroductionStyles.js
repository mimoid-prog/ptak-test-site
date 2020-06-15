import styled from "styled-components"

export const Introduction = styled.div`
  padding-bottom: 140px;
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
    grid-template-columns: 20px auto 20px;
    grid-template-rows: 40px auto 40px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

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
      width: 70%;
      margin: 0 auto;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 40px auto 40px;

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
      width: 40%;
      margin-right: 40px;
      grid-template-columns: 40px auto 40px;

      div:first-child {
        grid-row: 1 / 3;
      }

      div:last-child {
        grid-row: 2 / 4;
      }
    }

    & > div:last-child {
      width: 60%;
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
    & > div:first-child {
      width: 50%;
      grid-template-columns: 1fr 20px 1fr;

      div:first-child {
        grid-column: 1 / 2;
      }

      div:last-child {
        grid-column: 3 / 4;
      }
    }

    & > div:last-child {
      width: 50%;
      padding: 80px 0;
    }
  }
`
