import * as React from 'react'
import cn from 'classnames'
import './style.scss'
import RowContext from './RowContext'

interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  gutter?: number | [number, number]
  align?: string
  justify?: string
}

export default class Row extends React.Component<RowProps> {
  static defaultProps = {
    gutter: 0,
  }

  GetGutter(): [number, number] {
    let results: [number, number] = [0, 0]
    const { gutter } = this.props
    const formatRes = Array.isArray(gutter) ? gutter : [gutter, 0]
    formatRes.forEach((g, index) => {
      results[index] = g || 0
    })
    return results
  }

  render() {
    const { align, justify, className, style, children, ...otherProps } = this.props
    const prefixCls = 'x-row'
    const gutter = this.GetGutter()
    const classString = cn(
      prefixCls,
      {
        [`${prefixCls}--${justify}`]: justify,
        [`${prefixCls}--${align}`]: align,
      },
      className,
    )
    const horiStyle = {
      marginLeft: gutter[0]! / -2,
      marginRight: gutter[0]! / -2,
    }
    const vertStyle = {
      marginTop: gutter[1] / -2,
      marginBottom: gutter[1] / 2,
    }
    const rowStyle = {
      ...(gutter[0]! > 0 ? horiStyle : {}),
      ...(gutter[1]! > 0 ? vertStyle : {}),
      ...style,
    }
    return (
      <RowContext.Provider value={{ gutter }}>
        <div className={classString} style={rowStyle} {...otherProps}>
          {children}
        </div>
      </RowContext.Provider>
    )
  }
}
