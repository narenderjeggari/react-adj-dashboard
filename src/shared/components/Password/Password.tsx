
import React from 'react';

type PasswordProps = {
    callback: any;
    inputName: string;
}

export default function Password(props: PasswordProps) {
  const passwordLabel = props.callback.getPrompt();  

  const setValue = (event: any) => {
    props.callback.setPassword(event.target.value);
  }

  return (
    <div className="cstm_form-floating input-group form-floating mb-3">
      <input
        className={`cstm_input-password form-control border-end-0 bg-transparent`}
        id={props.inputName}
        name={props.inputName}
        onChange={setValue}
        placeholder={passwordLabel}
        type='password'
      />
      <label htmlFor={props.inputName}>{passwordLabel}</label>      
    </div>
  );
}
