import React from 'react'
import { Layout } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import './index.scss'
import { History } from 'history'
import SubRoutes from '../../router/subRoutes'
import Aside from './components/aside'
import Clock from './components/Clock'
const { Header, Content } = Layout

interface IProps {
  history: History
}

class App extends React.Component<IProps> {
  state = {
    collapsed: false,
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  onMenuHandle = (e: any) => {
    console.log(e)
    const path = e.key
    this.props.history.push(`/${path}`)
  }
  render() {
    return (
      <Layout className="root-wrapper">
        <Aside onMenuHandle={(e: any) => this.onMenuHandle(e)} />
        <Layout>
          <Header>
            {this.state.collapsed ? (
              <MenuUnfoldOutlined onClick={this.toggle} />
            ) : (
              <MenuFoldOutlined onClick={this.toggle} />
            )}
            <Clock />
          </Header>
          <Content className="main-warpper">
            <SubRoutes />
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default App
