import styled from "styled-components"

export const StickyBar = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  padding: 12px 0;
  color: white;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    position: sticky;
    top: 0;
    z-index: 99;
  }
`

export const StickyBarInner = styled.div`
  p {
    margin: 0;

    &:last-child {
      margin-top: 5px;
    }
  }

  div:last-child {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    div:last-child {
      display: block;
    }
  }
`
