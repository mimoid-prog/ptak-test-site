import React, { useState } from "react"
import { useIntl, navigate } from "gatsby-plugin-intl"
import * as Yup from "yup"
import * as S from "./FormStyles"
import { Formik, Form } from "formik"
import Input from "./elements/Input"
import Consent from "./elements/Consent"
import Loader from "components/Loader"
import { PrimaryButton } from "styles/GlobalStyles"
import axios from "axios"

const GS = {}
GS.PrimaryButton = PrimaryButton

const ExhibitorForm = () => {
  const intl = useIntl()

  const [errorMessage, setErrorMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  return (
    <Formik
      initialValues={{
        company: "",
        name: "",
        email: "",
        phone: "",
        nip: "",
        consentOne: false,
        consentTwo: false,
      }}
      validationSchema={Yup.object({
        company: Yup.string()
          .max(40, intl.formatMessage({ id: "form.max" }))
          .required(intl.formatMessage({ id: "form.required" })),
        name: Yup.string()
          .max(40, intl.formatMessage({ id: "form.max" }))
          .required(intl.formatMessage({ id: "form.required" })),
        email: Yup.string()
          .email(intl.formatMessage({ id: "form.invalidEmail" }))
          .max(40, intl.formatMessage({ id: "form.max" }))
          .required(intl.formatMessage({ id: "form.required" })),
        phone: Yup.string()
          .max(12, intl.formatMessage({ id: "form.max" }))
          .required(intl.formatMessage({ id: "form.required" })),
        nip: Yup.string()
          .max(12, intl.formatMessage({ id: "form.max" }))
          .required(intl.formatMessage({ id: "form.required" })),
        consentOne: Yup.boolean()
          .required(intl.formatMessage({ id: "form.required" }))
          .oneOf([true], intl.formatMessage({ id: "form.required" })),
        consentTwo: Yup.boolean()
          .required(intl.formatMessage({ id: "form.required" }))
          .oneOf([true], intl.formatMessage({ id: "form.required" })),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setIsLoading(true)
        setErrorMessage("")
        setSubmitting(false)

        axios
          .post("/api/exhibitor", { values })
          .then(res => {
            setIsLoading(false)
            navigate("/exhibitor-registration/confirmation")
          })
          .catch(err => {
            setIsLoading(false)
            setErrorMessage(intl.formatMessage({ id: "form.error" }))
          })
      }}
    >
      <Form>
        <S.FormInner>
          <Input
            label={intl.formatMessage({ id: "form.company" })}
            name="company"
            type="text"
          />
          <Input
            label={intl.formatMessage({ id: "form.name" })}
            name="name"
            type="text"
          />
          <Input
            label={intl.formatMessage({ id: "form.email" })}
            name="email"
            type="email"
          />
          <Input
            label={intl.formatMessage({ id: "form.phone" })}
            name="phone"
            type="text"
          />
          <Input
            label={intl.formatMessage({ id: "form.nip" })}
            name="nip"
            type="text"
          />
          <Consent
            consent={intl.formatMessage({ id: "form.consentOne" })}
            consentText={intl.formatMessage({ id: "form.consentOneText" })}
            name="consentOne"
          />
          <Consent
            consent={intl.formatMessage({ id: "form.consentTwo" })}
            consentText={intl.formatMessage({ id: "form.consentTwoText" })}
            name="consentTwo"
          />
          <S.SubmitBox>
            <div>
              <GS.PrimaryButton as="button" type="submit">
                {intl.formatMessage({ id: "form.button" })}
              </GS.PrimaryButton>
            </div>
            <div>{isLoading && <Loader />}</div>
          </S.SubmitBox>
          {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
        </S.FormInner>
      </Form>
    </Formik>
  )
}

export default ExhibitorForm
