import React from "react"
import { Container, SecondaryTitle, SecondaryButton } from "styles/GlobalStyles"
import * as S from "./PracticalStyles"
import { useTranslation, Trans } from "react-i18next"

const GS = {}
GS.Container = Container
GS.SecondaryTitle = SecondaryTitle
GS.SecondaryButton = SecondaryButton

const Practictal = () => {
  const { t } = useTranslation()

  return (
    <S.Practical>
      <GS.Container>
        <S.PracticalInner>
          <div>
            <h4>{t("global.name")}</h4>
            <GS.SecondaryTitle>
              <Trans>{"home.practicalInformation"}</Trans>
            </GS.SecondaryTitle>
          </div>
          <div>
            <h4>{t("home.openingHours")}</h4>
            <ul>
              <li>{t("global.firstDay")}</li>
              <li>{t("global.secondDay")}</li>
              <li>{t("global.thirdDay")}</li>
            </ul>
          </div>
          <div>
            <GS.SecondaryButton
              as="a"
              href="https://g.page/warsaw-expo?share"
              target="_blank"
              rel="noreferrer"
            >
              {t("home.road")}
            </GS.SecondaryButton>
          </div>
        </S.PracticalInner>
      </GS.Container>
    </S.Practical>
  )
}

export default Practictal
