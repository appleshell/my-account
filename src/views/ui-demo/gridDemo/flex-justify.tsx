import React from 'react'
import { Row, Col } from '../../../components/grid'
import './style.scss'

const Demo: React.SFC = () => {
  return (
    <div className="grid-demo-flex-justify">
      <h2>布局排版</h2>
      <p>给Row组件的justify属性设置：start、end、center、space-around、space-between。</p>
      <div style={{ marginBottom: '20px' }}>
        <Row justify="start">
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
        </Row>
        <Row justify="end">
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
        </Row>
        <Row justify="center">
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
        </Row>
        <Row justify="space-around">
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
        </Row>
        <Row justify="space-between">
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
        </Row>
      </div>
    </div>
  )
}

export default Demo
