import React from 'react'
import './style.scss'
import { Row, Col } from '../../components/grid'

const Demo: React.SFC = () => {
  const style = {
    padding: '8px 0', background: '#63da55'
  }
  return (
  <div className="component-demo">
    <h1>组件名称：Grid网格</h1>
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
    <h2>设置区块间隔</h2>
    <p>在Row组件上设置gutter属性。只为number时，表示水平间隔。值为数组时，分别表示水平间隔和垂直间隔</p>
    <Row gutter={12}>
      <Col span={8}>
        <div style={style}>
          col-8
        </div>
      </Col>
      <Col span={8}>
        <div style={style}>
          col-8
        </div>
      </Col>
      <Col span={8}>
        <div style={style}>
          col-8
        </div>
      </Col>
    </Row>
    <p>gutter为数组</p>
    <Row gutter={[12,16]}>
      <Col span={6}>
        <div style={style}>
          col-6
        </div>
      </Col>
      <Col span={6}>
        <div style={style}>
          col-6
        </div>
      </Col>
      <Col span={6}>
        <div style={style}>
          col-6
        </div>
      </Col>
      <Col span={6}>
        <div style={style}>
          col-6
        </div>
      </Col>
      <Col span={6}>
        <div style={style}>
          col-6
        </div>
      </Col>
      <Col span={6}>
        <div style={style}>
          col-6
        </div>
      </Col>
      <Col span={6}>
        <div style={style}>
          col-6
        </div>
      </Col>
      <Col span={6}>
        <div style={style}>
          col-6
        </div>
      </Col>
    </Row>

  </div>
)}

export default Demo