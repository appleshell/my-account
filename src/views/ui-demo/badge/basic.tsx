import * as React from 'react'
import './style.scss'
import Badge from '../../../components/badge'

const Demo: React.FC = () => {
  return (
    <div className="badge-demo badge-demo-basic">
      <h2>基本使用</h2>
      <p>badge包裹元素</p>
      <Badge dot>
        <span className="content-demo"></span>
      </Badge>
      <Badge count={9}>
        <span className="content-demo"></span>
      </Badge>
      <Badge count={0}>
        <span className="content-demo"></span>
      </Badge>
      <Badge count={0} showZero>
        <span className="content-demo"></span>
      </Badge>
      <Badge count={29}>
        <span className="content-demo"></span>
      </Badge>
      <Badge count={999}>
        <span className="content-demo"></span>
      </Badge>
    </div>
  )
}

export default Demo
