import styled from "styled-components"

export const FormInner = styled.div`
  display: flex;
  flex-direction: column;

  input {
    margin-top: 12px;

    &:first-child {
      margin: 0;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;
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

export const ErrorMessage = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.error};
  margin: 8px 0;
`
