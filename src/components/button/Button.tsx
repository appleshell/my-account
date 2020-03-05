import React from 'react'
import './style.scss'

interface IProps {
  type?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
}

const Button: React.FC<IProps> = props => {
  const { children } = props
  return (
  <button>{children}</button>
  )
}

export default Button