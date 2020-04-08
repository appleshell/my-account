import React from 'react'
import './style.scss'
import StatusDotDemo from './badge/statusDot'
import NoWrapperDemo from './badge/noWrapper'

const Demo: React.SFC = () => (
  <div className="component-demo">
    <h1>徽标组件</h1>
    <NoWrapperDemo />
    <StatusDotDemo />
  </div>
)

export default Demo
