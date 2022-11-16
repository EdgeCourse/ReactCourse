import React, { useState } from "react";

/*
A reusable component has to take in data or data sets (via props) and return an output (usually through a function passed via props). It is recommended that mutable state should be kept in the state property of a component to ensure they work correctly.

The FormInput() component takes an input type to determine what type of input element to render (email, text, etc). It also takes in a method onChange() to receive the value sent back out from the input.

The component manages its value locally, and only returns the updated state value to the component it is called from.

To achieve this, we created a local function handleChange(). The function checks if a method to receive the state data is available via props then sends the current state data to it for further processing.
*/

function FormInput(props) {
  const [inputType] = useState(props.type);
  const [inputValue, setInputValue] = useState(props.value);
  const [placeholderValue, setPlaceholderValue] = useState(props.placeholder);
  function handleChange(event) {
    setInputValue(event.target.value);
	setPlaceholderValue(event.target.placeholder);
    if (props.onChange) {
		props.onChange(inputValue);
		props.onChange(placeholderValue);
	}
  }
  return (
    <>
      <input
        type={inputType}
		name="input-form"
        value={inputValue}
		placeholder={placeholderValue}
        onChange={handleChange}
        class="inputclass"
      />
    </>
  )
}
export default FormInput;