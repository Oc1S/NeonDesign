import React, { useState, useEffect, useLayoutEffect, useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Close } from '../icon';

const prefix = 'neon-input';

export interface ExternalInputProps {
  onPressEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => any;
  addonBefore?: React.ReactNode;
  addonAfter?: React.ReactNode;
  clearable?: boolean;
  defaultValue?: string;
  wrapperClassName?: string;
}

export type InputProps = ExternalInputProps & React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({
  defaultValue,
  value: valueProp = '',
  onChange,
  onPressEnter,
  addonBefore,
  addonAfter,
  clearable,
  disabled,
  type = 'text',
  className,
  wrapperClassName,
  ...rest
}) => {
  const [value, setValue] = useState(defaultValue ? defaultValue : valueProp);
  useEffect(() => {
    if (valueProp) setValue(valueProp);
  }, [valueProp]);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isCloseIconVisible, setIsCloseIconVisible] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    inputRef.current?.value && setIsCloseIconVisible(true);
    !inputRef.current?.value && setIsCloseIconVisible(false);
    setValue(e.target.value);
    onChange?.(e);
  };

  const handlePressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.key === '13' && onPressEnter?.(e);
  };

  const handleClear = () => {
    /* const { current } = inputRef;
    if (current) current.value = ''; */
    setValue('');
    setIsCloseIconVisible(false);
  };

  const classes = classNames(`${prefix}`, className, { [`${prefix}-disabled`]: disabled });
  const wrapperClasses = classNames(`${prefix}-wrapper`, wrapperClassName);
  return (
    <>
      {addonBefore}
      <div className={wrapperClasses}>
        <input
          type={type}
          className={classes}
          onChange={(e) => handleChange(e)}
          onKeyUp={(e) => handlePressEnter(e)}
          value={value}
          disabled={disabled}
          ref={inputRef}
          spellCheck="false"
          {...rest}
        />
        {clearable && (
          <span
            className={`${prefix}-icon-close`}
            onClick={handleClear}
            style={{ display: isCloseIconVisible ? '' : 'none' }}
          >
            <Close></Close>
          </span>
        )}
      </div>
      {addonAfter}
    </>
  );
};

Input.propTypes = {
  onPressEnter: PropTypes.func,
  addonBefore: PropTypes.node,
  addonAfter: PropTypes.node,
  clearable: PropTypes.bool,
  defaultValue: PropTypes.string,
  wrapperClassName: PropTypes.string,
};

export default Input;
