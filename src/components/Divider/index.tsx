import * as React from 'react'
import cn from 'classnames'
import './style.scss'

interface DividerProps {
  type?: 'horizontal' | 'vertical'
  className?: string
  dashed?: boolean
}

const Divider: React.SFC<DividerProps> = props => {
  const { type, className, dashed, ...restProps } = props
  const prefixCls = 'x-divider'

  const classString = cn(
    className,
    prefixCls,
    `${prefixCls}--${type}`,
    {
      [`${prefixCls}--dashed`]: !!dashed
    }
  )

  return (
    <div className={classString} {...restProps}></div>
  )
}

export default Divider