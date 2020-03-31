import React from 'react'
import './style.scss'
import Avatar from '../../../components/avatar'
import { UserOutlined } from '@ant-design/icons'

const Demo: React.SFC = () => (
  <div className="avatar-demo avatar-demo-type">
    <h2>类型</h2>
    <p>可设置三种类型：图片、Icon和字符</p>
    <Avatar size={64} icon={<UserOutlined/>} />
    <Avatar size="large" icon={<UserOutlined/>} />
    <Avatar icon={<UserOutlined/>} />
    <Avatar size="small" icon={<UserOutlined/>} />
    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    <Avatar style={{background: 'orange'}}>Tomson</Avatar>
  </div>
)

export default Demo
