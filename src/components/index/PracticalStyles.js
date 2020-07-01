import styled from "styled-components"

export const Practical = styled.div`
  background: #121212;
  color: white;
  padding: 30px 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 40px 0;
  }
`

export const PracticalInner = styled.div`
  h2 {
    margin-top: 0;
  }

  h4 {
    margin-bottom: 8px;
  }

  li {
    margin-bottom: 4px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  div:last-child {
    margin-top: 25px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    h4 {
      margin-top: 0;
    }

    ul {
      list-style: none;
    }

    div:nth-child(2) {
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    div:last-child {
      margin-top: 0;
      position: relative;

      a {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        white-space: nowrap;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    grid-template-columns: 2fr 1fr 1fr;

    h2 br {
      display: none;
    }
  }
`
