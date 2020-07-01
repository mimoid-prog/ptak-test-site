import React from "react"
import * as S from "./PtakStyles"
import { Container, SecondaryTitle } from "styles/GlobalStyles"
import { useTranslation } from "react-i18next"

const GS = {}
GS.Container = Container
GS.SecondaryTitle = SecondaryTitle

const Ptak = () => {
  const { t } = useTranslation()

  return (
    <S.Ptak>
      <GS.Container>
        <GS.SecondaryTitle>Ptak Warsaw Expo</GS.SecondaryTitle>
        <S.Video>
          <iframe
            width="800"
            height="515"
            src="https://www.youtube.com/embed/-RmRpZN1mHA"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </S.Video>
      </GS.Container>
    </S.Ptak>
  )
}

export default Ptak
