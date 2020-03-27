import React from 'react'
import './style.scss'
import Avatar from '../../../components/avatar'

const Demo: React.SFC = () => (
  <div className="avatar-demo-basic">
    <h2>基础用法</h2>
    <Avatar>U</Avatar>
    <Avatar shape="square">U</Avatar>
    <Avatar size={64}>M</Avatar>
    <Avatar shape="square" size={64}>M</Avatar>
  </div>
)

export default Demo