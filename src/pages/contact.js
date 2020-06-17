import React from "react"
import SecondaryLayout from "layouts/SecondaryLayout"
import { useIntl } from "gatsby-plugin-intl"
import SEO from "utils/seo"
import styled from "styled-components"
import { Container } from "styles/GlobalStyles"

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
  const intl = useIntl()

  return (
    <SecondaryLayout>
      <GS.Container>
        <SEO
          title={`${intl.formatMessage({
            id: "contact.title",
          })} - ${intl.formatMessage({ id: "global.name" })}`}
        />
        <S.Contacts>
          <h2>{intl.formatMessage({ id: "contact.title" })}</h2>
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
              <h2>{intl.formatMessage({ id: "contact.address" })}</h2>
              <h4>Ptak Warsaw Expo</h4>
              <p>{intl.formatMessage({ id: "global.street" })}</p>
              <p>
                {intl.formatMessage({ id: "global.postal" })},{" "}
                {intl.formatMessage({ id: "global.city" })}
              </p>
              <p>{intl.formatMessage({ id: "global.helpline" })}</p>
              <p>{intl.formatMessage({ id: "global.email" })}</p>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90472.24622709713!2d20.84133189110273!3d52.16896184435045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471936f2f23dbdef%3A0x6fa9e7b2cfb56e4a!2sWarsaw%20Expo!5e0!3m2!1spl!2spl!4v1592382724496!5m2!1spl!2spl"
                frameBorder="0"
                allowFullScreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
          </div>
        </S.Address>
      </GS.Container>
    </SecondaryLayout>
  )
}

export default Contact
