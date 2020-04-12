import React from 'react'
import './style.scss'
import BasicDotDemo from './badge/basic'
import StatusDotDemo from './badge/statusDot'
import NoWrapperDemo from './badge/noWrapper'

const Demo: React.SFC = () => (
  <div className="component-demo">
    <h1>徽标组件</h1>
    <BasicDotDemo />
    <NoWrapperDemo />
    <StatusDotDemo />
  </div>
)

export default Demo
