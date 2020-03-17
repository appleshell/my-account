import React from 'react'
import './style.scss'
import cn from 'classnames'

interface IProps {
  className?: string
  placeholder?: string
  value: string
  disabled?: boolean
  mini?: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  inputProps?: React.InputHTMLAttributes<any>
  allowClear?: boolean
  addonBefore?: React.ReactChild
  addonAfter?: React.ReactChild
  [otherProps: string]: any
}

// 开发组件：1、功能实现，2、样式，3、动画效果

export default class Input extends React.PureComponent<IProps> {
  clearValue: React.EventHandler<any> = (e) => {
    const {onChange, inputProps} = this.props
    e.target = {value: '', ...inputProps}
    onChange(e)
  }
  render() {
    const {
      className,
      value,
      onChange,
      placeholder,
      inputProps,
      disabled,
      mini,
      allowClear,
      addonBefore,
      addonAfter,
    } = this.props
    const composeClassName = cn(
      'x-input',
      {
        'x-input--mini': mini,
        'x-input--disabled': !!disabled,
      },
      className,
    )
    return (
      <div className={composeClassName}>
        {addonBefore && <div className="x-input__addon-before">{addonBefore}</div>}
        <input
          {...inputProps}
          className="x-input--ipt"
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={!!disabled}
        />
        {(allowClear && !!value) && <span onClick={this.clearValue} className="x-input--clearIcon">×</span>}
        {addonAfter && <div className="x-input__addon-after">{addonAfter}</div>}
      </div>
    )
  }
}
