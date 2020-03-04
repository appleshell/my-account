import React from 'react'
import { Layout, Menu, Icon } from 'antd'
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
  componentLists = ['EmptyLine,空行']
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  onMenuHandle = (e:any) => {
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
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="sortable">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="learn">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
            <SubMenu key="com-ui" title="组件">
              <Menu.Item key="empty-line">
                <span>空行</span>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
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
