import * as React from 'react'
import '../style.scss'
import Badge from '../../../components/badge'

const Demo: React.FC = () => {
  return (
    <div className="badge-demo badge-demo-dot">
      <h2>状态点</h2>
      <Badge color="red" />
    </div>
  )
}

export default Demo
