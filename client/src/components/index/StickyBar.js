import React from "react"
import { Container, SecondaryButton } from "styles/GlobalStyles"
import * as S from "./StickyBarStyles"
import { useTranslation } from "react-i18next"

const GS = {}
GS.Container = Container
GS.SecondaryButton = SecondaryButton

const StickyBar = () => {
  const { t } = useTranslation()

  return (
    <S.StickyBar>
      <GS.Container>
        <S.StickyBarInner>
          <div>
            <p>35% {t("home.soldStands")}</p>
            <p>1714 {t("home.registeredVisitors")}</p>
          </div>
          <div>
            <GS.SecondaryButton to="/visitor-registration">
              {t("buttons.oneLineRegister")}
            </GS.SecondaryButton>
          </div>
        </S.StickyBarInner>
      </GS.Container>
    </S.StickyBar>
  )
}

export default StickyBar
