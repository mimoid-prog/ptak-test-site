import styled from "styled-components"

export const FormInner = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;
  }
`

export const Inputs = styled.div`
  div {
    margin-top: 12px;

    &:first-child {
      margin: 0;
    }
  }
`

export const SubmitBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 18px;

  & > div:first-child {
    width: 100%;

    button {
      width: 100%;
    }
  }

  & > div:last-child {
    margin-top: 10px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row;

    & > div:first-child {
      width: auto;
    }

    & > div:last-child {
      margin-top: 0;
      margin-left: 10px;
    }
  }
`
