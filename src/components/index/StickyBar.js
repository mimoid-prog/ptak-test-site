import React from "react"
import { Container, SecondaryButton } from "styles/GlobalStyles"
import * as S from "./StickyBarStyles"
import { useIntl } from "gatsby-plugin-intl"

// S.Container = Container
// S.SecondaryButton = SecondaryButton

const StickyBar = () => {
  const intl = useIntl()

  return (
    <S.StickyBar>
      <Container>
        <S.StickyBarInner>
          <div>
            <p>35% {intl.formatMessage({ id: "home.soldStands" })}</p>
            <p>1714 {intl.formatMessage({ id: "home.registeredVisitors" })}</p>
          </div>
          <div>
            <SecondaryButton>
              {intl.formatMessage({ id: "buttons.oneLineRegister" })}
            </SecondaryButton>
          </div>
        </S.StickyBarInner>
      </Container>
    </S.StickyBar>
  )
}

export default StickyBar
