import React from 'react'
import { styles } from 'refire-app'
import { FormField, FormInput } from 'elemental'

const TextFields = ({
  preview,
  text,
  updateText,
  inputRef,
  styles,
 }) => {
  if (preview) {
    return <div />
  } else {
    return (
      <FormField>
        <FormInput
          className={styles.text}
          placeholder="Text (markdown enabled)"
          value={text}
          multiline
          onChange={updateText}
          ref={(input) => inputRef(input)}
        />
      </FormField>
    )
  }
}

const css = {
  text: {},
}

export default styles(css, TextFields)
