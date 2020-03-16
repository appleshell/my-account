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
  [otherProps: string]: any
}

// 开发组件：1、功能实现，2、样式，3、动画效果

export default class Input extends React.PureComponent<IProps> {



  render() {
    const { className, value, onChange, placeholder, inputProps, disabled, mini } = this.props
    const composeClassName = cn(
      'x-input',
      {
        'x-input--mini': mini
      },
      className
    )
    return (
      <input
        {...inputProps}
        className={composeClassName}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={!!disabled}
      />
    )
  }
}
