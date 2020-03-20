import * as React from 'react'
import cn from 'classnames'
import RowContext from './RowContext'

interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  gutter?: number | [number, number];
  align?: string;
  justify?: string
}

export default class Row extends React.Component<RowProps> {
  static defaultProps = {
    gutter: 0
  }

  GetGutter(): [number, number] {
    let results: [number, number] = [0, 0];
    const { gutter } = this.props;
    const formatRes = Array.isArray(gutter) ? gutter : [gutter, 0]
    formatRes.forEach((g, index) => {
      results[index] = g || 0
    })
    return results
  }

  renderRow = () => {
    const {align, justify, className, style, children, ...otherProps} = this.props
    const prefixCls = 'x-row'
    const gutter = this.GetGutter()
    const classString = cn(
      prefixCls,
      {
        [`${prefixCls}--justify`]: justify,
        [`${prefixCls}--align`]: align
      },
      className
    )
  }
}