import React, { useState, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FormItem from './FormItem';

const prefix = 'neon-form';

export type LayoutType = 'horizontal' | 'vertical';

export interface FormProps {
  layout?: LayoutType;
  // colon?: boolean;
  onFinish?: (formState: FormStateType) => any;
  onFinishFailed?: (errorValue: Array<FormStateType>) => any;
  onValuesChange?: (formState: FormStateType) => any;
}

export interface FormType extends React.FC<FormProps> {
  Item: typeof FormItem;
}

export interface FormStateType {
  [name: string]: unknown;
}

export interface ActionType {
  type: string;
  data: FormStateType;
}

// 单个错误对象接口
export interface ErrorType {
  message: string;
}

// 整体错误状态接口
export interface ErrorsType {
  [name: string]: Array<ErrorType>;
}

export const formContext = React.createContext<[FormStateType, React.Dispatch<ActionType>]>([
  {},
  () => {},
]);

export const errorsContext = React.createContext<[ErrorsType, React.Dispatch<any>]>([{}, () => {}]);

export interface StyleStateType {
  isErrorInfoShow?: boolean;
  layout?: string;
}

export const styleContext = React.createContext<StyleStateType>({} as StyleStateType);

const Form: FormType = ({
  children,
  layout = 'horizontal',
  onFinish,
  onFinishFailed,
  onValuesChange,
  ...rest
}) => {
  const [styleState, setStyleState] = useState<StyleStateType>({
    layout,
    isErrorInfoShow: false,
  });

  /* const [styleState, dispatchStyleState] = useReducer(
    (state: StyleStateType, action: any) => {
      switch (action.type) {
        case 'change':
          return { ...state, ...action.data };
        default:
          throw new Error('Not Existing Action Type');
      }
    },
    {
      layout,
      isErrorInfoShow: false,
    },
  ); */

  const [formState, dispatchForm] = useReducer((state: FormStateType, action: ActionType) => {
    switch (action.type) {
      case 'change':
        const { data } = action;
        return { ...state, ...data };
      default:
        throw new Error('Not Existing Action Type');
    }
  }, {});

  const [errors, dispatchError] = useReducer((state: ErrorsType, action: any) => {
    const { data } = action;
    const key = Object.keys(data)[0];
    switch (action.type) {
      case 'initialize':
        return { ...state, ...action.data };
      case 'onChange':
        /* 保留原有err */
        // const newState = { ...state, [key]: [...state?.[key], ...data[key]] };
        /* 替换原有err */
        // const newState = { ...state, [key]: data[key] };
        return { ...state, [key]: data[key] };
      default:
        throw new Error('Not Existing Action Type');
    }
  }, {});

  useEffect(() => {
    onValuesChange?.(formState);
  }, [formState]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStyleState({ ...styleState, isErrorInfoShow: true });
    /* 查找错误 */
    const errorValue: Array<FormStateType> = [];
    const keys = Object.keys(errors);
    keys.forEach((key) => {
      if (errors[key].length) {
        errorValue.push({ [key]: formState[key], message: errors[key][0].message });
        // console.log('existingErr', errorValue, key, errors[key]);
      }
    });
    if (errorValue.length) return handleFinishFailed(errorValue);

    onFinish?.(formState);
  };

  const handleFinishFailed = (errorValue: Array<FormStateType>) => {
    onFinishFailed?.(errorValue);
  };

  const classes = classNames(`${prefix}`, {
    [`${prefix}-vertical`]: layout === 'vertical',
  });
  return (
    <form className={classes} {...rest} onSubmit={(e) => handleSubmit(e)}>
      <formContext.Provider value={[formState, dispatchForm]}>
        <errorsContext.Provider value={[errors, dispatchError]}>
          <styleContext.Provider value={styleState}>{children}</styleContext.Provider>
        </errorsContext.Provider>
      </formContext.Provider>
    </form>
  );
};

Form.Item = FormItem;

Form.propTypes = {
  layout: PropTypes.oneOf(['horizontal', 'vertical']),
  onFinish: PropTypes.func,
  onFinishFailed: PropTypes.func,
  onValuesChange: PropTypes.func,
};

export default Form;
