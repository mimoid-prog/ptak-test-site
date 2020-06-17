import styled from "styled-components"

export const Ptak = styled.div`
  padding-bottom: 120px;
  text-align: center;
`

export const Video = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 70%;
    margin: 0 auto;
    padding-bottom: 45%;
  }
`
