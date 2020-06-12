import React from "react"
import { Container, SecondaryButton } from "styles/GlobalStyles"
import * as S from "./StickyBarStyles"
import { useIntl } from "gatsby-plugin-intl"

const GS = {}
GS.Container = Container
GS.SecondaryButton = SecondaryButton

const StickyBar = () => {
  const intl = useIntl()

  return (
    <S.StickyBar>
      <GS.Container>
        <S.StickyBarInner>
          <div>
            <p>35% {intl.formatMessage({ id: "home.soldStands" })}</p>
            <p>1714 {intl.formatMessage({ id: "home.registeredVisitors" })}</p>
          </div>
          <div>
            <GS.SecondaryButton to="/registration">
              {intl.formatMessage({ id: "buttons.oneLineRegister" })}
            </GS.SecondaryButton>
          </div>
        </S.StickyBarInner>
      </GS.Container>
    </S.StickyBar>
  )
}

export default StickyBar
