import styled from "styled-components"
import { Link } from "gatsby-plugin-intl"

export const Container = styled.div`
  width: 85%;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    width: 80%;
  }
`

export const BasicButton = styled(Link)`
  border: none;
  border-radius: 3px;
  padding: 15px 25px;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.2s ease;
`

export const PrimaryButton = styled(BasicButton)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }

  span:first-child {
    font-weight: 700;
  }

  span:last-child {
    display: block;
    margin-top: 4px;
  }
`

export const SecondaryButton = styled(BasicButton)`
  background: white;
  color: black;

  &:hover {
    background-color: ${({ theme }) => theme.colors.whiteDark};
  }
`

export const SecondaryTitle = styled.h2`
  font-size: 1.8em;

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    font-size: 2.2em;
  }
`
