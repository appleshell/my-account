import React from 'react'
import cn from 'classnames'
import './style.scss'

interface IProps {
  type?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  size?: string
  className?: string
  block?: string | boolean
  disabled?: string | boolean
  loading?: boolean
  children: React.ReactNode
  [otherProps: string]: any
}

const Button: React.FC<IProps> = props => {
  const { type, className, onClick, children, size, block, disabled, loading, ...otherProps } = props

  const compseClassName = cn(
    'x-button',
    {
      'x-button--block': block,
      'x-button--disabled': disabled,
    },
    `x-button--${size}`,
    `x-button--${type}`,
    className,
  )

  if (onClick) {
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
    <button disabled={!!disabled} className={compseClassName} {...otherProps}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  type: 'primary',
  size: 'middle',
}

export default Button
