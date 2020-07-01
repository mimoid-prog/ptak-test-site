import React from "react"
import styled from "styled-components"

const S = {}
S.FormError = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.error};
  margin: 8px 0;
`

const FormError = ({ message }) => {
  return message && <S.FormError>{message}</S.FormError>
}

export default FormError
