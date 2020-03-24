import React from 'react'
import './style.scss'
import BasicDemo from './gridDemo/basic'
import GutterDemo from './gridDemo/gutter'
import FlexJustifyDemo from './gridDemo/flex-justify'
import FlexAlignDemo from './gridDemo/flex-align'
import FlexOrderDemo from './gridDemo/flex-order'

const Demo: React.SFC = () => {
  return (
    <div className="component-demo">
      <h1>组件名称：Grid网格</h1>
      <BasicDemo />
      <GutterDemo />
      <FlexJustifyDemo/>
      <FlexAlignDemo/>
      <FlexOrderDemo/>
    </div>
  )
}

export default Demo
