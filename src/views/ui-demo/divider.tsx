import * as React from 'react'
import Button from '../../components/button'
import Divider from '../../components/Divider'
import './style.scss'

const DividerDemo: React.SFC = props => {
  return (
    <div className="component-demo component-demo-divider">
      <Button>Link</Button>
      <Divider type="vertical" />
      <Button>Link</Button>
    </div>
  )
}

export default DividerDemo