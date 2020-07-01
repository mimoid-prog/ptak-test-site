import React from "react"
import { useField } from "formik"
import styled from "styled-components"
import ErrorMessage from "./ErrorMessage"

const S = {}

S.Input = styled.input`
  border: 1px solid grey;
  border-radius: 5px;
  padding: 12px 8px;
  height: 42px;
  line-height: 30px;
  margin: 0;
  width: 100%;
  display: block;
  box-sizing: border-box;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    background: red;
    width: 10px;
    height: 10px;
    right: 0;
    top: 0;
    display: block;
  }
`

const InputBox = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <div>
      <S.Input placeholder={label} spellcheck="false" {...field} {...props} />
      {meta.touched && meta.error ? (
        <ErrorMessage message={meta.error} />
      ) : null}
    </div>
  )
}

export default InputBox
