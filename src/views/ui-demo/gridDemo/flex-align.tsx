import React from 'react'
import { Row, Col } from '../../../components/grid'
import './style.scss'

interface IDemoBox extends React.HTMLAttributes<HTMLDivElement> {
  value: number,
}

const Demo: React.SFC = () => {
const DemoBox = (props:IDemoBox) => <div className={`height-${props.value}`}>{props.children}</div>
  return (
    <div className="grid-demo-flex-align">
      <h2>子元素垂直对齐</h2>
      <p>给Row组件的align属性设置：top、middle、bottom。</p>
      <div style={{ marginBottom: '20px' }}>
        <Row justify="center" align="top">
          <Col span={4}>
            <DemoBox value={20}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={60}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={40}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={80}>col-4</DemoBox>
          </Col>
        </Row>
        <Row justify="space-around" align="middle">
        <Col span={4}>
            <DemoBox value={20}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={60}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={40}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={80}>col-4</DemoBox>
          </Col>
        </Row>
        <Row justify="space-between" align="bottom">
        <Col span={4}>
            <DemoBox value={20}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={60}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={40}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={80}>col-4</DemoBox>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Demo
