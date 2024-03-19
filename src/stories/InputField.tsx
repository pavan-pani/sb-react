import React, { useState } from 'react';
import './InputField.css'

export type InputFieldProps ={
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  // Add other event types as needed
}

export const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  onChange,
  onBlur,
  onFocus,
  onKeyPress,
}) => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange?.(event);
  };

  return (
    <input
      className="input-field"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      onBlur={onBlur}
      onFocus={onFocus}
      onKeyPress={onKeyPress}
      // Bind other event handlers as needed
    />
  );
};
