import React from 'react'
import './style.scss'
import Layout from '../../components/layout'

const Demo: React.FC = () => (
  <div className="component-demo component-demo-layout">
    <h1>组件名称：布局</h1>

    <h2>基本布局</h2>
    <div className="base-layout">
      <Layout>
        <Layout.Header>header</Layout.Header>
        <Layout.Body>body</Layout.Body>
        <Layout.Footer>footer</Layout.Footer>
      </Layout>
    </div>
  </div>
)

export default Demo