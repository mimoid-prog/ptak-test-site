import React from "react"
import * as S from "./ThematicZonesStyles"
import { useIntl, FormattedHTMLMessage } from "gatsby-plugin-intl"
import { Container, SecondaryTitle } from "styles/GlobalStyles"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const GS = {}
GS.Container = Container
GS.SecondaryTitle = SecondaryTitle

const ThematicZones = () => {
  const intl = useIntl()

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
        <GS.SecondaryTitle>
          {intl.formatMessage({ id: "home.thematicZones.title" })}
        </GS.SecondaryTitle>
        <S.Zones>
          {data.allFile.edges.map((image, i) => (
            <S.Zone key={i}>
              <div>
                <Img fluid={image.node.childImageSharp.fluid} />
              </div>
              <p>
                <FormattedHTMLMessage id={`home.thematicZones.zones.${i}`} />
              </p>
            </S.Zone>
          ))}
        </S.Zones>
      </GS.Container>
    </S.ThematicZones>
  )
}

export default ThematicZones
