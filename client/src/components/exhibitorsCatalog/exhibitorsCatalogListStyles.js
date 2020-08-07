import styled from "styled-components"

export const Table = styled.div``

export const Scrollable = styled.div``

const DivBasic = styled.div`
  display: grid;
  grid-template-columns: 40% 30% 30%;
  padding: 16px 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    & > div {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`

export const FirstRow = styled(DivBasic)`
  border-bottom: 1px solid black;
  font-weight: 700;
  color: #303030;

  &:hover {
    background: none;
  }
`

export const Row = styled(DivBasic)`
  cursor: pointer;
  background: ${({ expandedRow }) =>
    expandedRow ? "rgba(142,185,229,.3)" : "white"};

  &:hover {
    background: ${({ expandedRow }) =>
      expandedRow ? "rgba(142,185,229,.3)" : "#8eb9e5"};

    div:first-child img {
      display: block;
    }
  }

  div:first-child {
    font-weight: 700;
    text-transform: uppercase;
    display: flex;
    align-items: center;

    div {
      margin-left: 10px;
    }

    img {
      width: 16px;
      transform: ${({ expandedRow }) =>
        expandedRow ? "rotate(-90deg)" : "rotate(90deg)"};
      transition: transform 0.3s ease;
      display: ${({ expandedRow }) => (expandedRow ? "block" : "none")};
    }
  }

  a {
    color: black;
  }
`

export const ExpandedRow = styled.div`
  display: ${({ expandedRow }) => (expandedRow ? "flex" : "none")};
  background: ${({ expandedRow }) =>
    expandedRow ? "rgba(142,185,229,.3)" : "white"};
  align-items: center;
  padding: 16px 10px;

  img {
    width: 100px;
    margin-right: 20px;
  }
`
