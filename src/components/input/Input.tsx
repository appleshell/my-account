import React from 'react'
import './style.scss'

interface IProps {
  className?: string
  placeholder?: string
  value: string
  disabled?: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  inputProps?: React.InputHTMLAttributes<any>
  [otherProps: string]: any
}

// 开发组件：1、功能实现，2、样式，3、动画效果

export default class Input extends React.PureComponent<IProps> {
  render() {
    const { value, onChange, placeholder, inputProps, disabled } = this.props
    return (
      <input
        {...inputProps}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={!!disabled}
      />
    )
  }
}
