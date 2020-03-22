import * as React from 'react'
import cn from 'classnames'
import RowContext from './RowContext'

type ColSpanType = string | number
type FlexType = number | 'none' | 'auto' | string
interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  span?: ColSpanType
  order?: ColSpanType
  offset?: ColSpanType
  push?: ColSpanType
  pull?: ColSpanType
  flex?: FlexType
}

class Col extends React.Component<ColProps, {}> {
  render() {
    const { span, order, offset, push, pull, flex, className, style, children } = this.props
    const prefixCls = 'x-col'
    const classString = cn(prefixCls, className)
    return <RowContext.Consumer>{value => <div>sd</div>}</RowContext.Consumer>
  }
}

export default Col
