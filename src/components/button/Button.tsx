import React from 'react'
import cn from 'classnames'
import LoadingIcon from '../icons/Loading'
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
  const {
    type,
    className,
    onClick,
    children,
    size,
    block,
    disabled,
    loading,
    ...otherProps
  } = props

  const compseClassName = cn(
    'x-button',
    {
      'x-button--block': block,
      'x-button--disabled': disabled,
      'x-button--loading': loading,
    },
    `x-button--${size}`,
    `x-button--${type}`,
    className,
  )

  let loadingNode = loading ? <LoadingIcon /> : null

  if (onClick) {
    const clickHandle: React.MouseEventHandler<HTMLButtonElement> = evt => {
      onClick(evt)
    }
    return (
      <button disabled={!!disabled} className={compseClassName} onClick={clickHandle} {...otherProps}>
        {loadingNode}
        {children}
      </button>
    )
  }

  return (
    <button disabled={!!disabled} className={compseClassName} {...otherProps}>
      {loadingNode}
      {children}
    </button>
  )
}

Button.defaultProps = {
  type: 'primary',
  size: 'middle',
}

export default Button
