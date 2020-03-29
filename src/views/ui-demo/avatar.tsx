import React from 'react'
import './style.scss'
import BasicDemo from './avatar/basic'
import TypeDemo from './avatar/icon'

const Demo: React.SFC = () => (
  <div className="component-demo">
    <h1>头像组件</h1>
    <BasicDemo />
    <TypeDemo />
  </div>
)

export default Demo
