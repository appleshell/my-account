import * as React from 'react'
import './style.scss'
import Badge from '../../../components/badge'

const Demo: React.FC = () => {
  return (
    <div className="badge-demo badge-demo-dot">
      <h2>状态点</h2>
      <p>设置status属性，展示状态</p>
      <Badge status="default" />
      <Badge status="success" />
      <Badge status="processing" />
      <Badge status="error" />
      <Badge status="warning" />
      <p>设置text属性，展示文本</p>
      <Badge status="warning" text="Warning" />
      <br/>
      <Badge status="success" text="Success" />
    </div>
  )
}

export default Demo
