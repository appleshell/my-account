import React from 'react'
import './style.scss'
import Avatar from '../../../components/avatar'
import Badge from '../../../components/badge'
import { UserOutlined } from '@ant-design/icons'

const Demo: React.SFC = () => (
  <div className="avatar-demo avatar-demo-badge">
    <h2>带徽标</h2>
    <p></p>
    <Badge dot>
      <Avatar shape="square" size="large" icon={<UserOutlined/>} />
    </Badge>
    <Badge count={6}>
      <Avatar shape="square" icon={<UserOutlined/>} />
    </Badge>
  </div>
)

export default Demo
