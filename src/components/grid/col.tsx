import * as React from 'react'
import cn from 'classnames'
import RowContext from './RowContext'

type ColSpanType = string | number
type FlexType = number | 'none' | 'auto' | string
interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  span?: ColSpanType
  order?: number
  offset?: ColSpanType
  push?: ColSpanType
  pull?: ColSpanType
  flex?: FlexType
}

class Col extends React.Component<ColProps, {}> {
  render() {
    const {
      span,
      order,
      offset,
      push,
      pull,
      flex,
      className,
      style,
      children,
      ...ohterProps
    } = this.props
    const prefixCls = 'x-col'
    const classString = cn(
      prefixCls,
      {
        [`${prefixCls}--${span}`]: span,
        [`${prefixCls}--order-${order}`]: order,
      },
      className,
    )
    return (
      <RowContext.Consumer>
        {({ gutter }) => {
          let colStyle: React.CSSProperties = { ...style }
          if (gutter) {
            const horiStyle = {
              paddingLeft: gutter[0]! / 2,
              paddingRight: gutter[0]! / 2,
            }
            const vertStyle = {
              paddingTop: gutter[1]! / 2,
              paddingBottom: gutter[1]! / 2,
            }
            colStyle = {
              ...(gutter[0]! > 0 ? horiStyle : {}),
              ...(gutter[1]! > 0 ? vertStyle : {}),
              ...colStyle,
            }
          }
          return (
            <div {...ohterProps} style={colStyle} className={classString}>
              {children}
            </div>
          )
        }}
      </RowContext.Consumer>
    )
  }
}

export default Col
