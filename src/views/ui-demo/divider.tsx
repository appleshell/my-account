import * as React from 'react'
import Button from '../../components/button'
import Divider from '../../components/Divider'
import './style.scss'

const DividerDemo: React.SFC = props => {
  return (
    <div className="component-demo component-demo-divider">
      <h1>组件名称：分割线</h1>
      <h2>分割线方向</h2>
      <p>设置type属性，vertical和horizontal，默认值是vertical</p>
      <div>
        <Button>Link</Button>
        <Divider type="vertical" />
        <Button>Link</Button>
      </div>
      <div style={{ marginTop: '12px' }}>
        <p>上一段话</p>
        <Divider type="horizontal" />
        <p>下一段话</p>
      </div>
      <h2>分割线样式</h2>
      <p>设置dashed属性</p>
      <div>
        <Button>Link</Button>
        <Divider dashed />
        <Button>Link</Button>
      </div>
      <div style={{ marginTop: '12px' }}>
        <p>上一段话</p>
        <Divider type="horizontal" dashed />
        <p>下一段话</p>
      </div>
    </div>
  )
}

export default DividerDemo
