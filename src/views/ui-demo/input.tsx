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
        <Input
          value={value}
          onChange={this.onChage}
          placeholder="请输入"
        ></Input>
        <h2>禁用</h2>
        <p>设置disabled属性，input禁用</p>
        <Input value={value} onChange={this.onChage} disabled />
      </div>
    )
  }
}

export default Demo
