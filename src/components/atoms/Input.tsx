import React from 'react';

// INTERFACES
import { InputProps } from '../../@types';

const Input: React.FC<InputProps> = ({
  name,
  type,
  placeholder,
  value,
  handleChange,
  handleBlur,
  handleInput,
}: InputProps) => (
  <input
    className={`input input-${type}`}
    id={name}
    name={name}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={handleChange}
    onBlur={handleBlur}
    onInput={handleInput}
  />
);

Input.defaultProps = {
  handleChange: () => {},
  handleBlur: () => {},
  handleInput: () => {},
  placeholder: '',
};

export default Input;
