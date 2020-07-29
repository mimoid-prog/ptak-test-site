import React from "react"
import SecondaryLayout from "layouts/SecondaryLayout"
import SEO from "utils/seo"
import styled from "styled-components"
import { Container } from "styles/GlobalStyles"
import { useTranslation } from "react-i18next"
import { useStaticQuery, graphql } from "gatsby"
import localizedNavigate from "utils/localizedNavigate"

const GS = {}
GS.Container = Container

const S = {}
S.Contacts = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    & > div {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 20px;
    }
  }
`

S.SingleContact = styled.div`
  background: white;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 14px;

  &:last-child {
    margin-bottom: 0;
  }

  div {
    margin-bottom: 10px;
  }

  p:first-child {
    font-weight: 700;
  }

  p {
    margin: 0 0 2px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    margin-bottom: 0;
  }
`

S.Address = styled.div`
  margin-top: 50px;

  h4 {
    margin-bottom: 0px;
  }

  p {
    margin: 5px 0 0;
  }

  & > div {
    div:first-child {
      margin-bottom: 30px;
    }

    iframe {
      width: 100%;
      height: 300px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-top: 80px;

    & > div {
      display: flex;

      div:first-child {
        margin-right: 60px;
        margin-bottom: 0;
      }

      div:last-child {
        width: 100%;
      }
    }
  }
`

const Contact = () => {
  const { t } = useTranslation()

  localizedNavigate("/visitor-registration/confirmation", "en")

  const data = useStaticQuery(graphql`
    query {
      allMongodbPtakGlobals {
        edges {
          node {
            label
            name
            value
          }
        }
      }
    }
  `).allMongodbPtakGlobals.edges

  const helpline = data.filter(item => item.node.name === "helpline")[0].node
    .value

  const email = data.filter(item => item.node.name === "email")[0].node.value

  return (
    <SecondaryLayout>
      <GS.Container>
        <SEO title={`${t("contact.title")} - ${t("global.name")}`} />
        <S.Contacts>
          <h2>{t("contact.title")}</h2>
          <div>
            <S.SingleContact>
              <div>
                <p>Jan Kowalski</p>
                <p>Specjalista ds. Organizacji Targów</p>
              </div>
              <p>jan.kowalski@warsawexpo.eu</p>
              <p>tel: +48 513 723 302</p>
            </S.SingleContact>
            <S.SingleContact>
              <div>
                <p>Kamil Nowak</p>
                <p>Specjalista ds. Organizacji Targów</p>
              </div>
              <p>kamil.nowak@warsawexpo.eu</p>
              <p>tel: +48 513 723 302</p>
            </S.SingleContact>
            <S.SingleContact>
              <div>
                <p>Kasia Kowalska</p>
                <p>Specjalista ds. Organizacji Targów</p>
              </div>
              <p>kasia.kowalska@warsawexpo.eu</p>
              <p>tel: +48 513 723 302</p>
            </S.SingleContact>
          </div>
        </S.Contacts>
        <S.Address>
          <div>
            <div>
              <h2>{t("contact.address")}</h2>
              <h4>Ptak Warsaw Expo</h4>
              <p>{t("global.street")}</p>
              <p>
                {t("global.postal")}, {t("global.city")}
              </p>
              <p>{helpline}</p>
              <p>{email}</p>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90472.24622709713!2d20.84133189110273!3d52.16896184435045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471936f2f23dbdef%3A0x6fa9e7b2cfb56e4a!2sWarsaw%20Expo!5e0!3m2!1spl!2spl!4v1592382724496!5m2!1spl!2spl"
                frameBorder="0"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                title="map"
              ></iframe>
            </div>
          </div>
        </S.Address>
      </GS.Container>
    </SecondaryLayout>
  )
}

export default Contact
