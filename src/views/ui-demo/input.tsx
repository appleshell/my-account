import React from 'react'
import './style.scss'
import Input from '../../components/input'

interface IState {
  value: string
}

class Demo extends React.PureComponent<IState> {
  state = {
    value: '',
  }

  onChage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    this.setState({
      value,
    })
  }

  render() {
    const { value } = this.state
    return (
      <div className="component-demo">
        <h1>组件名称：输入框（Input）</h1>

        <h2>基础用法</h2>
        <Input value={value} onChange={this.onChage} placeholder="请输入"></Input>
        <h2>禁用</h2>
        <p>设置disabled属性，input禁用</p>
        <Input value={value} onChange={this.onChage} disabled placeholder="禁用状态" />
        <h2>mini尺寸</h2>
        <p>设置mini属性</p>
        <Input value={value} onChange={this.onChage} mini placeholder="请输入" />
        <h2>左右挂载</h2>
        <p>左右挂载的属性分别是addonBefore和addonAfter</p>
        <Input
          value={value}
          onChange={this.onChage}
          placeholder="请输入"
          addonBefore={<span>√</span>}
          addonAfter="RMB"
        />
        <h2>显示删除</h2>
        <p>设置allowClear属性为true</p>
        <Input
          value={value}
          onChange={this.onChage}
          placeholder="请输入"
          allowClear
        />
      </div>
    )
  }
}

export default Demo
