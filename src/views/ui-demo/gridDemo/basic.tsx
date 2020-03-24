import React from 'react'
import './style.scss'
import { Row, Col } from '../../../components/grid'

const Demo: React.SFC = () => {
  const style = {
    padding: '8px 0', background: '#63da55'
  }
  return (
  <div className="grid-demo-basic">
    <h2>基础用法：</h2>
    <div style={{ marginBottom: '20px' }}>
      <Row>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <div style={style}>col-8</div>
        </Col>
        <Col span={8}>
          <div style={style}>col-8</div>
        </Col>
        <Col span={8}>
          <div style={style}>col-8</div>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <div style={style}>col-12</div>
        </Col>
        <Col span={12}>
          <div style={style}>col-12</div>
        </Col>
      </Row>
    </div>
  </div>
)}

export default Demo