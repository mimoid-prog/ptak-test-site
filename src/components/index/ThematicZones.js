import React from "react"
import * as S from "./ThematicZonesStyles"
import { useTranslation, Trans } from "react-i18next"
import { Container, SecondaryTitle } from "styles/GlobalStyles"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const GS = {}
GS.Container = Container
GS.SecondaryTitle = SecondaryTitle

const ThematicZones = () => {
  const { t } = useTranslation()

  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: { relativeDirectory: { eq: "thematicZones" } }
        sort: { fields: [base] }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <S.ThematicZones>
      <GS.Container>
        <GS.SecondaryTitle>{t("home.thematicZones.title")}</GS.SecondaryTitle>
        <S.Zones>
          {data.allFile.edges.map((image, i) => (
            <S.Zone key={i}>
              <div>
                <Img
                  fluid={image.node.childImageSharp.fluid}
                  alt={`alts.thematicZones.${i}`}
                />
              </div>
              <Trans>{`home.thematicZones.zones.${i}`}</Trans>
            </S.Zone>
          ))}
        </S.Zones>
      </GS.Container>
    </S.ThematicZones>
  )
}

export default ThematicZones
