import React from 'react'
import Button from '../../components/button'
import './style.scss'

const Demo = () => (
  <div className="component-demo">
    <h1>组件名称：按钮（Button）</h1>

    <h2>按钮类型</h2>
    <p>type属性分别为primary、warning、danger</p>
    <Button>确定</Button>
    <Button type="default">确定</Button>
    <Button type="warning">警告</Button>
    <Button type="danger">错误</Button>

    <h2>按钮尺寸</h2>
    <p>size属性分别为large、middle、small，默认值是middle</p>
    <Button size="large">确定</Button>
    <Button size="middle">确定</Button>
    <Button size="small">确定</Button>

    <h2>Block按钮</h2>
    <p>block属性使按钮适合父宽度</p>
    <Button block>确定</Button>

    <h2>按钮不可用</h2>
    <p>设置disabled属性，按钮不可点击</p>
    <Button disabled>确定</Button>

    <h2>加载中按钮</h2>
    <p>设置loading属性，按钮不可点击</p>
    <Button loading={true}>确定</Button>
    <Button loading={true} type="default">确定</Button>
    <Button loading={true} type="warning">确定</Button>
    <Button loading={true} type="default" size="small">确定</Button>
  </div>
)

export default Demo
