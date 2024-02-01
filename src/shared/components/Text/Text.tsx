import React from 'react';

type TextProps = {
    callback: any;
    inputName: string;
}

export default function Text(props: TextProps) {
  
  const existingValue = props.callback.getInputValue();
  const textInputLabel = props.callback.getPrompt();
  
  function setValue(event: any) {
    props.callback.setInputValue(event.target.value);
  }

  return (
    <div className={`cstm_form-floating form-floating mb-3`}>
      <input
        className={`cstm_form-control form-control bg-transparent`}
        defaultValue={existingValue}
        id={props.inputName}
        name={props.inputName}
        onChange={setValue}
        placeholder={textInputLabel}
        type='text'
      />
      <label htmlFor={props.inputName}>{textInputLabel}</label>      
    </div>
  );
}
