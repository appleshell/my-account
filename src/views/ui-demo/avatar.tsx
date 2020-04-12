import React from 'react'
import './style.scss'
import BasicDemo from './avatar/basic'
import TypeDemo from './avatar/icon'
import WithBadgeDemo from './avatar/withBadge'

const Demo: React.SFC = () => (
  <div className="component-demo">
    <h1>头像组件</h1>
    <BasicDemo />
    <TypeDemo />
    <WithBadgeDemo />
  </div>
)

export default Demo
