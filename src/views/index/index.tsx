import React from 'react'
import { Layout, Menu } from 'antd'
import { UserOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import './index.scss'
import { History } from 'history'
import SubRoutes from '../../router/subRoutes'
import Clock from './components/Clock'
const { Header, Sider, Content } = Layout
const { SubMenu } = Menu

interface IProps {
  history: History
}

class App extends React.Component<IProps> {
  state = {
    collapsed: false,
  }
  componentLists = [
    'Layout,布局',
    'Grid,网格',
    'Button,按钮',
    'Input,输入框',
    'Divider,分割线',
    'EmptyLine,空行',
  ]
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
      <Layout>
        <Sider className="side-bar" trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo">
            <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="" />
          </div>
          <Menu theme="light" mode="inline" onClick={this.onMenuHandle}>
            <Menu.Item key="student">
              <UserOutlined />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="sortable">
              <UserOutlined />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="learn">
              <UserOutlined />
              <span>nav 3</span>
            </Menu.Item>
            <SubMenu key="com-ui" title="组件">
              {this.componentLists.map(item => {
                const comInfo = item.split(',')
                return <Menu.Item key={comInfo[0]}>{comInfo[1]}</Menu.Item>
              })}
            </SubMenu>
          </Menu>
        </Sider>
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
