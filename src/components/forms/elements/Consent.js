import React, { useState } from "react"
import { useIntl } from "gatsby-plugin-intl"
import { useField } from "formik"
import styled from "styled-components"
import ErrorMessage from "./ErrorMessage"

const S = {}
S.Consent = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;

  p {
    margin: 0;
    font-size: 12px;
    margin-left: 5px;

    span {
      color: ${({ theme }) => theme.colors.primary};
      margin-left: 4px;
      cursor: pointer;
      user-select: none;
    }
  }
`

S.ConsentText = styled.p`
  font-size: 12px;
  overflow: hidden;
  margin: 0;
  padding-top: ${({ show }) => (show ? "6px" : "0")};
  max-height: ${({ show }) => (show ? "440px" : "0")};
  transition: max-height 0.4s ease, padding-top 0.4s ease;
`

const Consent = ({ consent, consentText, ...props }) => {
  const intl = useIntl()
  const [field, meta] = useField({ ...props, type: "checkbox" })
  const [showConsentText, setShowConsentText] = useState(false)

  return (
    <>
      <S.Consent>
        <input type="checkbox" {...field} {...props} />
        <p>
          {consent}
          <span
            role="button"
            tabIndex={0}
            onClick={() => setShowConsentText(!showConsentText)}
          >
            (
            {intl.formatMessage({
              id: showConsentText ? "form.showLess" : "form.showMore",
            })}
            )
          </span>
        </p>
      </S.Consent>
      <S.ConsentText show={showConsentText}>{consentText}</S.ConsentText>
      {meta.touched && meta.error ? (
        <ErrorMessage message={meta.error} />
      ) : null}
    </>
  )
}

export default Consent
