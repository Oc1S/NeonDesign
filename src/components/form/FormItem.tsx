import React, { useEffect, useRef, useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { nanoid } from 'nanoid';
import { formContext, errorsContext, styleContext, ErrorType } from './index';

const prefix = 'neon-form-item';

export interface FormItemProps {
  name: string;
  rules?: Array<RuleType>;
  label?: string;
  colon?: boolean;
  onChange?: (name: string, e: React.ChangeEvent) => any;
}

export interface RuleType {
  message: string;
  required?: boolean;
  minLen?: number;
  maxLen?: number;
}

const FormItem: React.FC<FormItemProps> = ({
  children,
  name,
  rules,
  label,
  onChange,
  colon = true,
}) => {
  const [formState, dispatchForm] = useContext(formContext);
  const [errors, dispatchErrors] = useContext(errorsContext);
  const { isErrorInfoShow, layout } = useContext(styleContext);
  const nanoIdRef = useRef<string>();

  useEffect(() => {
    dispatchForm({
      type: 'change',
      data: {
        [name]: '',
      },
    });
    dispatchErrors({
      type: 'initialize',
      data: {
        [name]: [],
      },
    });
    validate('');
  }, []);

  useEffect(() => {
    nanoIdRef.current = nanoid();
  }, []);

  const getControlled = () => {
    return {
      value: formState[name],
      onChange: handleChange,
    };
  };

  const validate = (value: string) => {
    if (!rules) return;
    const err: ErrorType[] = [];
    rules.forEach((rule) => {
      const { message } = rule;
      if (rule.required) {
        if (!value?.replace(/\s*/, '')) {
          err.push({ message });
        }
      }
      if (rule.minLen) {
        if (value.length < rule.minLen) {
          err.push({ message });
        }
      }
      if (rule.maxLen) {
        if (value.length > rule.maxLen) {
          err.push({ message });
        }
      }
    });
    dispatchErrors({
      type: 'onChange',
      data: {
        [name]: err,
      },
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(name, e);
    dispatchForm({
      type: 'change',
      data: {
        [name]: e.target.value,
      },
    });
    validate(e.target.value);
  };

  const isRequired =
    rules?.findIndex((rule) => {
      return rule.required;
    }) !== -1;
  const classes = classNames(`${prefix}`, { [`${prefix}-vertical`]: layout === 'vertical' });
  const labelClasses = classNames(`${prefix}-label`, {
    [`${prefix}-label-required`]: isRequired,
    [`${prefix}-label-colon`]: colon && layout !== 'vertical',
  });
  const warningClasses = classNames(
    `${prefix}-warning`,
    errors?.[name]?.length ? `${prefix}-warning-show` : `${prefix}-warning-hide`,
  );

  const renderLabel = (id: string) => {
    if (!label) return null;
    return (
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
    );
  };

  return (
    <>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) {
          return child;
        }
        const id = child.props.id ? child.props.id : nanoIdRef.current;
        return (
          <div className={classes}>
            {layout !== 'vertical' && renderLabel(id)}
            <div className={`${prefix}-warning-wrapper`}>
              {layout === 'vertical' && renderLabel(id)}
              {React.cloneElement(child, { ...getControlled(), ...child.props, id })}
              {isErrorInfoShow && (
                <span className={warningClasses}>{errors?.[name]?.[0]?.message}</span>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

FormItem.propTypes = {
  name: PropTypes.string.isRequired,
  rules: PropTypes.arrayOf(PropTypes.any),
  label: PropTypes.string,
  colon: PropTypes.bool,
  onChange: PropTypes.func,
};

export default FormItem;
