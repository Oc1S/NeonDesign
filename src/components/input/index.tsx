import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const prefix = 'neon-input';

export interface ExternalInputProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
  onPressEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => any;
  addonBefore?: React.ReactNode;
  addonAfter?: React.ReactNode;
  bordered?: boolean;
  clearable?: boolean;
  defaultValue?: string;
  disabled?: boolean;
  maxLength?: number;
  id?: string;
}

export type InputProps = ExternalInputProps & React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({
  defaultValue,
  maxLength,
  id,
  value,
  onChange,
  onPressEnter,
  addonBefore,
  addonAfter,
  bordered,
  clearable,
  disabled,

  placeholder,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  };

  const handlePressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.key === '13' && onPressEnter?.(e);
  };
  const classes = classNames(`${prefix}`);
  return (
    <>
      {!!addonBefore && <label></label>}
      <input
        maxLength={maxLength}
        type="text"
        className={classes}
        onChange={(e) => handleChange(e)}
        onKeyUp={(e) => handlePressEnter(e)}
        defaultValue={defaultValue}
        value={value}
        id={id}
        placeholder={placeholder}
      />
      {!!addonAfter && <label></label>}
    </>
  );
};

Input.propTypes = {};

export default Input;
