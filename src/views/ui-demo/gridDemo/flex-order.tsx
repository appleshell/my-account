import React from 'react'
import { Row, Col } from '../../../components/grid'
import './style.scss'

const Demo: React.SFC = () => {
  return (
    <div className="grid-demo-flex-order">
      <h2>子元素排序</h2>
      <p>给Col组件的justify属性设置：start、end、center、space-around、space-between。</p>
      <div style={{ marginBottom: '20px' }}>
        <Row justify="start">
          <Col span={6} order={4}>1 col-6</Col>
          <Col span={6} order={3}>2 col-6</Col>
          <Col span={6} order={2}>3 col-6</Col>
          <Col span={6} order={1}>4 col-6</Col>
        </Row>
      </div>
    </div>
  )
}

export default Demo
