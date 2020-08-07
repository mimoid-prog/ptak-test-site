import React from "react"
import { useField } from "formik"
import styled from "styled-components"
import ErrorMessage from "./ErrorMessage"

const S = {}

S.Textarea = styled.textarea`
  border: 1px solid grey;
  border-radius: 5px;
  padding: 12px 8px;
  margin: 0;
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  height: 100%;
  min-height: 120px;
  display: block;
  box-sizing: border-box;
`

const TextareaBox = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <div>
      <S.Textarea
        placeholder={label}
        spellCheck="false"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <ErrorMessage message={meta.error} />
      ) : null}
    </div>
  )
}

export default TextareaBox
