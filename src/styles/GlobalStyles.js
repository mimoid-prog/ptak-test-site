import styled from "styled-components"

export const Container = styled.div`
  width: 85%;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    width: 80%;
  }
`

export const BasicButton = styled.button`
  border: none;
  border-radius: 3px;
  padding: 15px 25px;
  display: inline-block;
  cursor: pointer;
`

export const PrimaryButton = styled(BasicButton)`
  background: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  color: white;

  span:last-child {
    font-weight: 400;
    display: block;
    margin-top: 4px;
  }
`

export const SecondaryButton = styled(BasicButton)`
  background: white;
  color: black;
`
