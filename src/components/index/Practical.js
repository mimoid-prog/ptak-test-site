import React from "react"
import { useIntl, FormattedHTMLMessage } from "gatsby-plugin-intl"
import { Container, SecondaryTitle, SecondaryButton } from "styles/GlobalStyles"
import * as S from "./PracticalStyles"

const GS = {}
GS.Container = Container
GS.SecondaryTitle = SecondaryTitle
GS.SecondaryButton = SecondaryButton

const Practictal = () => {
  const intl = useIntl()

  return (
    <S.Practical>
      <GS.Container>
        <S.PracticalInner>
          <div>
            <h4>{intl.formatMessage({ id: "global.name" })}</h4>
            <GS.SecondaryTitle>
              <FormattedHTMLMessage id="home.practicalInformation" />
            </GS.SecondaryTitle>
          </div>
          <div>
            <h4>{intl.formatMessage({ id: "home.openingHours" })}</h4>
            <ul>
              <li>{intl.formatMessage({ id: "global.firstDay" })}</li>
              <li>{intl.formatMessage({ id: "global.secondDay" })}</li>
              <li>{intl.formatMessage({ id: "global.thirdDay" })}</li>
            </ul>
          </div>
          <div>
            <GS.SecondaryButton
              as="a"
              href="https://g.page/warsaw-expo?share"
              target="_blank"
              rel="noreferrer"
            >
              {intl.formatMessage({ id: "home.road" })}
            </GS.SecondaryButton>
          </div>
        </S.PracticalInner>
      </GS.Container>
    </S.Practical>
  )
}

export default Practictal
