import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as S from "./exhibitorsCatalogListStyles"
import arrow from "images/icons/arrowBlackBold.svg"
import google from "images/google.png"
import { useTranslation } from "react-i18next"

const ExhibitorsCatalogList = () => {
  const { t } = useTranslation()
  const tableRef = React.createRef()

  const data = useStaticQuery(graphql`
    query {
      allMongodbTestCompanies {
        edges {
          node {
            id
            company
            email
            phone
            website
            descPL
            descEN
            accepted
          }
        }
      }
    }
  `)

  const newData = data.allMongodbTestCompanies.edges.filter(
    edge => edge.node.accepted
  )

  const [expandedRow, setExpandedRow] = useState("")

  const changeExpandedRow = (id, tableRef, rowRef) => {
    setExpandedRow(expandedRow !== id ? id : "")
  }

  return (
    <S.Table>
      <S.FirstRow>
        <div>{t("exhibitorsCatalog.company")}</div>
        <div>{t("exhibitorsCatalog.email")}</div>
        <div>{t("exhibitorsCatalog.website")}</div>
      </S.FirstRow>
      <S.Scrollable ref={tableRef}>
        {newData.map((item, i) => {
          const rowRef = React.createRef()

          return (
            <React.Fragment key={item.node.id}>
              <S.Row
                ref={rowRef}
                onClick={() =>
                  changeExpandedRow(item.node.id, tableRef, rowRef)
                }
                expandedRow={item.node.id === expandedRow ? true : false}
              >
                <div>
                  <span>{item.node.company}</span>
                  <div>
                    <img src={arrow} alt="arrow" />
                  </div>
                </div>
                <div>{item.node.email}</div>
                <div>
                  <a href={item.node.website} target="_blank" rel="noreferrer">
                    {
                      item.node.website
                        .replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")
                        .split("/")[0]
                    }
                  </a>
                </div>
              </S.Row>
              <S.ExpandedRow
                expandedRow={item.node.id === expandedRow ? true : false}
              >
                <img src={google} alt="logo" />
                <p>{item.node.descPL}</p>
              </S.ExpandedRow>
            </React.Fragment>
          )
        })}
      </S.Scrollable>
    </S.Table>
  )
}

export default ExhibitorsCatalogList
