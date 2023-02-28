import React from "react";

// import { Container } from './styles';
type props = {
  inputType: string;
  label: string;
  entryValue?: string;
  updateEntryFunction: React.Dispatch<string>;
};
const InputField = (props: props) => {
  return (
    <>
      <label htmlFor={props.label}>{props.label}</label>
      <input
        className="border rounded-sm py-1"
        type={props.inputType}
        name={props.label}
        id={props.label}
        value={props.entryValue}
        onChange={(e) => {
          props.updateEntryFunction(e.currentTarget.value);
        }}
      />
    </>
  );
};

export default InputField;
