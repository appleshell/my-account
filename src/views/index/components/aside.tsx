import React from 'react'
import { Layout, Menu } from 'antd'
import { UserOutlined } from '@ant-design/icons'

const { Sider } = Layout
const { SubMenu } = Menu

interface IProps {
  onMenuHandle: any
}

class Aside extends React.PureComponent<IProps> {
  private componentLists = [
    'Layout,布局',
    'Grid,网格',
    'Button,按钮',
    'Input,输入框',
    'Divider,分割线',
    'Avatar,头像',
    'badge,徽标',
    'comment,评论',
    'EmptyLine,空行',
  ]

  onMenuHandle = (e: any) => {
    this.props.onMenuHandle(e)
    // console.log(e)
    // const path = e.key
    // this.props.history.push(`/${path}`)
  }

  render() {
    return (
      <>
        <Sider>
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
            <SubMenu key="covid" title="疫情">
              <Menu.Item key="covid">
                <UserOutlined />
                <span>疫情数据</span>
              </Menu.Item>
              <Menu.Item key="country">
                <UserOutlined />
                <span>国家</span>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="com-ui" title="组件">
              {this.componentLists.map(item => {
                const comInfo = item.split(',')
                return <Menu.Item key={comInfo[0]}>{comInfo[1]}</Menu.Item>
              })}
            </SubMenu>
          </Menu>
        </Sider>
      </>
    )
  }
}

export default Aside
