import * as React from 'react'
import './style.scss'
import cn from 'classnames'

export interface BadgeProps {
  count?: React.ReactNode;
  status?: 'success' | 'processing' | 'default' | 'error' | 'warning'
  color?: string
  text?: string
  dot?: boolean
  showZero?: boolean
  overflowCount?: number
  className?: string
}

class Badge extends React.Component<BadgeProps, any> {
  static defaultProps = {
    overflowCount: 99
  }

  getDiplayCount = () => {
    const { overflowCount, count } = this.props
    const isDot = this.isDot()
    if(isDot) return ''
    console.log(overflowCount, count)
    return (count as number) > (overflowCount as number) ? `${overflowCount}+` : count
  }

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

  isHidden = () => {
    const { showZero, count } = this.props
    const isDot = this.isDot()
    const isZero = this.isZero()
    const isEmpty = count === null || count === undefined || count === ''
    return (isEmpty || (isZero && !showZero)) && !isDot
  }

  render() {
    const prefixCls = 'x-badge'
    const { status, color, text, children } = this.props
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
      [`${prefixCls}-count`]: !this.isDot(),
      [`${prefixCls}-dot`]: this.isDot(),
      [`${prefixCls}-not-a-wrapper`]: !children
    })
    const isHidden = this.isHidden()
    const displayCount = this.getDiplayCount()
    return (
      <span className={this.getBadgeCls(prefixCls)}>
        {children}
        {!isHidden && <span className={countClassStrings}>
          {displayCount}
        </span>}
      </span>
    )
  }
}

export default Badge
