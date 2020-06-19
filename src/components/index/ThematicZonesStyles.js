import styled from "styled-components"

export const ThematicZones = styled.div`
  padding-bottom: 90px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-bottom: 140px;
  }
`

export const Zones = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export const Zone = styled.div`
  background: #ebebeb;
  border-radius: 8px;
  padding: 5px 10px;
  width: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 10px;

  div {
    width: 60px;
    height: 60px;
    margin-right: 5px;
  }

  span {
    display: block;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 0px;
  }
`
