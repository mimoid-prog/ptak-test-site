import React from "react"
import styled from "styled-components"

const S = {}
S.ErrorMessage = styled.p`
  font-size: 14px;
  margin: 4px 0 0;
  padding-left: 5px;
  color: ${({ theme }) => theme.colors.error};
`

const ErrorMessage = ({ message }) => {
  return <S.ErrorMessage>{message}</S.ErrorMessage>
}

export default ErrorMessage
