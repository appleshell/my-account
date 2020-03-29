import React from 'react'
import './style.scss'
import Avatar from '../../../components/avatar'

const Demo: React.SFC = () => (
  <div className="avatar-demo avatar-demo-basic">
    <h2>基础用法</h2>
    <p>size属性设置尺寸大小，shape设置形状</p>
    <Avatar size={64}>M</Avatar>
    <Avatar size="large">M</Avatar>
    <Avatar size={36}>M</Avatar>
    <Avatar>U</Avatar>
    <Avatar size="small">M</Avatar>
    <Avatar shape="square" size={64}>M</Avatar>
    <Avatar shape="square" size="large">M</Avatar>
    <Avatar shape="square" size={36}>M</Avatar>
    <Avatar shape="square">U</Avatar>
    <Avatar shape="square" size="small">M</Avatar>
  </div>
)

export default Demo