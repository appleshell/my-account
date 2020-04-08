import * as React from 'react'
import './style.scss'
import cn from 'classnames'

export interface BadgeProps {
  count?: React.ReactNode;
  status?: 'success' | 'processing' | 'default' | 'error' | 'warning'
  color?: string
  text?: string
  dot?: boolean
  className?: string
}

class Badge extends React.Component<BadgeProps, any> {
  hasStatus = (): boolean => {
    const { status, color } = this.props
    return !!status || !!color
  }

  getBadgeCls = (prefixCls: string) => {
    const { className } = this.props
    return cn(prefixCls, className)
  }

  isZero = () => {
    const { count } = this.props
    return count === '0' || count === 0
  }

  isDot = () => {
    const { dot } = this.props
    const isZero = this.isZero()
    return (dot && !isZero) || this.hasStatus()
  }

  render() {
    const prefixCls = 'x-badge'
    const { status, color, text, children, count } = this.props
    const statusCls = cn({
      [`${prefixCls}-status-dot`]: this.hasStatus(),
      [`${prefixCls}-status-${status}`]: !!status,
    })
    const statusStyle: React.CSSProperties = {}
    if(color) {
      statusStyle.background = color
    }
    if(!children && this.hasStatus()) {
      return <span className={this.getBadgeCls(prefixCls)}>
        <span className={statusCls} style={statusStyle}></span>
        <span className={`${prefixCls}-status-text`}>{text}</span>
      </span>
    }
    const countClassStrings = cn({
      [`${prefixCls}-count`]: !this.isDot()
    })
    return (
      <span className={this.getBadgeCls(prefixCls)}>
        {children}
        <sup className={countClassStrings}>
          {count}
        </sup>
      </span>
    )
  }
}

export default Badge
