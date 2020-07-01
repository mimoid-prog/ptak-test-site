import React from "react"
import { useTranslation } from "react-i18next"
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
  const { t } = useTranslation()

  return (
    <S.Statistics>
      <GS.Container>
        <S.StatisticsInner>
          <GS.TertiaryTitle>{t("home.statistics.title")}</GS.TertiaryTitle>
          <div className="statistics-box">
            <S.Item>
              <img src={visitors} alt={t("alts.icons.visitors")} />
              <p>
                <span>7000</span>
                <span>{t("home.statistics.stat1")}</span>
              </p>
            </S.Item>
            <S.Item>
              <img src={exhibitors} alt={t("alts.icons.exhibitors")} />
              <p>
                <span>100</span>
                <span>{t("home.statistics.stat2")}</span>
              </p>
            </S.Item>
            <S.Item>
              <img src={area} alt={t("alts.icons.area")} />
              <p>
                <span>5000m2</span>
                <span>{t("home.statistics.stat3")}</span>
              </p>
            </S.Item>
            <S.Item>
              <img src={conference} alt={t("alts.icons.conference")} />
              <p>
                <span>20</span>
                <span>{t("home.statistics.stat4")}</span>
              </p>
            </S.Item>
          </div>
          <div className="buttons-box">
            <GS.PrimaryButton to="/visitor-registration">
              {t("buttons.register")}
            </GS.PrimaryButton>
            <GS.OutlinedButton to="/exhibitor-registration">
              {t("buttons.becomeAnExhibitor")}
            </GS.OutlinedButton>
          </div>
        </S.StatisticsInner>
      </GS.Container>
    </S.Statistics>
  )
}

export default Statistics
