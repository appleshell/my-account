import * as React from 'react'
import './style.scss'
import Badge from '../../../components/badge'

const Demo: React.FC = () => {
  return (
    <div className="badge-demo badge-demo-dot">
      <h2>状态点</h2>
      <p>设置status属性，根据状态显示颜色。取值：defalut | success | processing | error | warning</p>
      <Badge status="default" />
      <Badge status="success" />
      <Badge status="processing" />
      <Badge status="error" />
      <Badge status="warning" />
      <p>设置text属性，展示文本</p>
      <Badge status="warning" text="Warning" />
      <br/>
      <Badge status="success" text="Success" />
      <br/>
      <Badge status="processing" text="processing" />
      <br/>
      <Badge status="error" text="error" />
      <br/>
      <Badge status="warning" text="warning" />
      <p>设置color，自定义颜色</p>
      <Badge color="#87d068" text="#87d068" />
      <br/>
      <Badge color="#108ee9" text="#108ee9" />
    </div>
  )
}

export default Demo
