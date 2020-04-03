import * as React from 'react'
import './style.scss'
import cn from 'classnames'

export interface BadgeProps {
  count?: React.ReactNode;
  status?: string
  color?: string
  text?: string
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
  render() {
    const prefixCls = 'x-badge'
    const { status, color, text, className } = this.props
    const statusCls = cn({
      [`${prefixCls}-status-dot`]: this.hasStatus(),
      [`${prefixCls}-status-${status}`]: !!status,
    })
    const statusStyle: React.CSSProperties = {}
    if(color) {
      statusStyle.background = color
    }
    return <span className={this.getBadgeCls(prefixCls)}>
      <span className={statusCls} style={statusStyle}></span>
      <span className={`${prefixCls}-status-text`}>{text}</span>
    </span>
  }
}

export default Badge
