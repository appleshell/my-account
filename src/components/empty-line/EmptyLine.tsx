import React from 'react'
import './style'

export interface IEmptyLineProps {
  height?: number
  background?: string
}

const EmptyLine = ({ height = 20, background = '#fff'}: IEmptyLineProps) => {
  return <div className="empty-line" style={{ height, background }} />
}

export default EmptyLine
