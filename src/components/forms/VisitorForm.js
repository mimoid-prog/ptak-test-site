import React, { useState } from "react"
import * as Yup from "yup"
import * as S from "./FormStyles"
import { Formik, Form } from "formik"
import InputBox from "./elements/InputBox"
import Consent from "./elements/Consent"
import FormError from "./elements/FormError"
import axios from "axios"
import SubmitBox from "./elements/SubmitBox"
import { useTranslation } from "react-i18next"
import localizedNavigate from "utils/localizedNavigate"
import LocaleContext from "src/localeContext"

const VisitorForm = () => {
  const { t } = useTranslation()
  const { locale } = React.useContext(LocaleContext)

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
          .max(40, t("form.max"))
          .required(t("form.required")),
        name: Yup.string().max(40, t("form.max")).required(t("form.required")),
        email: Yup.string()
          .email(t("form.invalidEmail"))
          .max(40, t("form.max"))
          .required(t("form.required")),
        phone: Yup.string().max(12, t("form.max")).required(t("form.required")),
        nip: Yup.string().max(12, t("form.max")).required(t("form.required")),
        consentOne: Yup.boolean()
          .required(t("form.required"))
          .oneOf([true], t("form.required")),
        consentTwo: Yup.boolean()
          .required(t("form.required"))
          .oneOf([true], t("form.required")),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setIsLoading(true)
        setErrorMessage("")
        setSubmitting(false)
        axios
          .post("/api/visitor", { values })
          .then(res => {
            localizedNavigate("/visitor-registration/confirmation", locale, {
              state: {
                qr: res.data.qr,
              },
            })
          })
          .catch(() => {
            setIsLoading(false)
            setErrorMessage(t("form.error"))
          })
      }}
    >
      <Form>
        <S.FormInner>
          <S.Inputs>
            <InputBox label={t("form.company")} name="company" type="text" />
            <InputBox label={t("form.name")} name="name" type="text" />
            <InputBox label={t("form.email")} name="email" type="email" />
            <InputBox label={t("form.phone")} name="phone" type="text" />
            <InputBox label={t("form.nip")} name="nip" type="text" />
          </S.Inputs>
          <Consent
            consent={t("form.consentOne")}
            consentText={t("form.consentOneText")}
            name="consentOne"
          />
          <Consent
            consent={t("form.consentTwo")}
            consentText={t("form.consentTwoText")}
            name="consentTwo"
          />
          <SubmitBox isLoading={isLoading} text={t("form.button")} />
          <FormError message={errorMessage} />
        </S.FormInner>
      </Form>
    </Formik>
  )
}

export default VisitorForm
