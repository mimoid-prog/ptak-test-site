import React from "react"
import styled from "styled-components"
import Loader from "components/Loader"
import { PrimaryButton } from "styles/GlobalStyles"

const GS = {}
GS.PrimaryButton = PrimaryButton

const S = {}
S.SubmitBox = styled.div`
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

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
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

const SubmitBox = ({ isLoading, text }) => {
  return (
    <S.SubmitBox>
      <div>
        <GS.PrimaryButton as="button" type="submit">
          {text}
        </GS.PrimaryButton>
      </div>
      <div>{isLoading && <Loader />}</div>
    </S.SubmitBox>
  )
}

export default SubmitBox
