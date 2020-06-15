import styled from "styled-components"

export const Partners = styled.div`
  text-align: center;
  padding: 20px 0 30px;

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding: 40px 0 60px;

    & > div {
      max-width: 60%;
    }
  }
`

export const Slide = styled.div`
  padding-bottom: 40px;

  img {
    text-align: center;
  }
`
