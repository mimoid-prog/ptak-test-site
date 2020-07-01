import styled from "styled-components"

export const Inputs = styled.div`
  div {
    margin-bottom: 12px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 10px;

    div {
      margin: 0;
    }
  }
`
