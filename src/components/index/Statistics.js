import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import {
  Container,
  TertiaryTitle,
  PrimaryButton,
  OutlinedButton,
} from "styles/GlobalStyles"
import * as S from "./StatisticsStyles"
import visitorImg from "images/visitor.svg"
import exhibitorImg from "images/exhibitor.svg"
import areaImg from "images/area.svg"
import lectureImg from "images/study.svg"

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
              <img src={visitorImg} />
              <p>
                <span>7000</span>
                <span>
                  {intl.formatMessage({ id: "home.statistics.stat1" })}
                </span>
              </p>
            </S.Item>
            <S.Item>
              <img src={exhibitorImg} />
              <p>
                <span>100</span>
                <span>
                  {intl.formatMessage({ id: "home.statistics.stat2" })}
                </span>
              </p>
            </S.Item>
            <S.Item>
              <img src={areaImg} />
              <p>
                <span>5000m2</span>
                <span>
                  {intl.formatMessage({ id: "home.statistics.stat3" })}
                </span>
              </p>
            </S.Item>
            <S.Item>
              <img src={lectureImg} />
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
