import React from 'react'
import cn from 'classnames'
import './style.scss'

interface IProps {
  type?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  className?: string
  children: React.ReactNode
  [otherProps: string]: any
}

const Button: React.FC<IProps> = props => {
  const { type, className, onClick, children, ...otherProps } = props

  const compseClassName = cn(
    'x-button',
    `x-button--${type}`,
    className,
  )

  if(onClick) {
    const clickHandle: React.MouseEventHandler<HTMLButtonElement> = evt => {
      onClick(evt)
    }
    return (
      <button className={compseClassName} onClick={clickHandle} {...otherProps}>
        {children}
      </button>
    )
  }

  return (
    <button className={compseClassName} {...otherProps}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  type: 'primary'
}

export default Button