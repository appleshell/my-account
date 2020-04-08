import * as React from 'react'
import './style.scss'
import Badge from '../../../components/badge'

const Demo: React.FC = () => {
  return (
    <div className="badge-demo badge-demo-dot">
      <h2>独立使用</h2>
      <p>badge不包裹元素，独立使用</p>
      <Badge count={10} />
    </div>
  )
}

export default Demo
