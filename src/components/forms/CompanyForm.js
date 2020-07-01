import React, { useState } from "react"
import * as Yup from "yup"
// import * as S from "./FormStyles"
import * as S from "./CompanyFormStyles"
import { Formik, Form } from "formik"
import InputBox from "./elements/InputBox"
import TextareaBox from "./elements/TextareaBox"
import Consent from "./elements/Consent"
import FormError from "./elements/FormError"
import axios from "axios"
import SubmitBox from "./elements/SubmitBox"
import { useTranslation } from "react-i18next"
import localizedNavigate from "utils/localizedNavigate"
import LocaleContext from "src/localeContext"

const CompanyForm = () => {
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
        website: "",
        descPL: "",
        descEN: "",
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
        website: Yup.string()
          .url(t("form.invalidWebsite"))
          .max(50, t("form.max"))
          .required(t("form.required")),
        descPL: Yup.string()
          .max(500, t("form.max"))
          .required(t("form.required")),
        descEN: Yup.string().max(500, t("form.max")),
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
          .post("/api/company", { values })
          .then(() => {
            localizedNavigate("/exhibitor-registration/confirmation", locale)
          })
          .catch(() => {
            setIsLoading(false)
            setErrorMessage(t("form.error"))
          })
      }}
    >
      <Form>
        <div>
          <S.Inputs>
            <InputBox label={t("form.company")} name="company" type="text" />
            <InputBox label={t("form.name")} name="name" type="text" />
            <InputBox label={t("form.email")} name="email" type="email" />
            <InputBox label={t("form.phone")} name="phone" type="text" />
            <InputBox label={t("form.nip")} name="nip" type="text" />
            <InputBox label={t("form.website")} name="website" type="text" />
            <TextareaBox label={t("form.descPL")} name="descPL" />
            <TextareaBox label={t("form.descEN")} name="descEN" />
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
        </div>
      </Form>
    </Formik>
  )
}

export default CompanyForm
