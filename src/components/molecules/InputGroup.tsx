import React from 'react';

// INTERFACE
import { LabelProps } from '../../@types';

// COMPONENTS
import Input from '../atoms/Input';

const InputGroup: React.FC<LabelProps> = ({
  label,
  input,
}: LabelProps) => (
  <label htmlFor={input.name}>
    {label}
    <Input
      name={input.name}
      type={input.type}
      placeholder={input.placeholder}
      value={input.value}
      handleChange={input.handleChange}
      handleInput={input.handleInput}
      handleBlur={input.handleBlur}
    />
  </label>
);

export default InputGroup;
