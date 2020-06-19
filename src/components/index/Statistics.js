import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import {
  Container,
  TertiaryTitle,
  PrimaryButton,
  OutlinedButton,
} from "styles/GlobalStyles"
import * as S from "./StatisticsStyles"
import visitors from "images/icons/visitor.svg"
import exhibitors from "images/icons/exhibitor.svg"
import area from "images/icons/area.svg"
import conference from "images/icons/study.svg"

const GS = {}
GS.Container = Container
GS.TertiaryTitle = TertiaryTitle
GS.PrimaryButton = PrimaryButton
GS.OutlinedButton = OutlinedButton

const Statistics = () => {
  const intl = useIntl()

  return (
    <S.Statistics>
      <GS.Container>
        <S.StatisticsInner>
          <GS.TertiaryTitle>
            {intl.formatMessage({ id: "home.statistics.title" })}
          </GS.TertiaryTitle>
          <div className="statistics-box">
            <S.Item>
              <img
                src={visitors}
                alt={intl.formatMessage({ id: "alts.icons.visitors" })}
              />
              <p>
                <span>7000</span>
                <span>
                  {intl.formatMessage({ id: "home.statistics.stat1" })}
                </span>
              </p>
            </S.Item>
            <S.Item>
              <img
                src={exhibitors}
                alt={intl.formatMessage({ id: "alts.icons.exhibitors" })}
              />
              <p>
                <span>100</span>
                <span>
                  {intl.formatMessage({ id: "home.statistics.stat2" })}
                </span>
              </p>
            </S.Item>
            <S.Item>
              <img
                src={area}
                alt={intl.formatMessage({ id: "alts.icons.area" })}
              />
              <p>
                <span>5000m2</span>
                <span>
                  {intl.formatMessage({ id: "home.statistics.stat3" })}
                </span>
              </p>
            </S.Item>
            <S.Item>
              <img
                src={conference}
                alt={intl.formatMessage({ id: "alts.icons.conference" })}
              />
              <p>
                <span>20</span>
                <span>
                  {intl.formatMessage({ id: "home.statistics.stat4" })}
                </span>
              </p>
            </S.Item>
          </div>
          <div className="buttons-box">
            <GS.PrimaryButton to="/visitor-registration">
              {intl.formatMessage({ id: "buttons.register" })}
            </GS.PrimaryButton>
            <GS.OutlinedButton to="/exhibitor-registration">
              {intl.formatMessage({ id: "buttons.becomeAnExhibitor" })}
            </GS.OutlinedButton>
          </div>
        </S.StatisticsInner>
      </GS.Container>
    </S.Statistics>
  )
}

export default Statistics
