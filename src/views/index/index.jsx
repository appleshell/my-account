import React from 'react'
import {Layout,Menu,Icon} from 'antd'
import './index.scss'
import moment from 'moment'
import SubRoutes from '../../router/subRoutes'
const { Header,Sider,Content } = Layout

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  tick() {
    this.setState({
      date: new Date()
    })
  }
  render() {
    return (
      <div style={{float:'right'}}>
        <h2 style={{color:'#fff',fontSize:'16px'}}>{moment(this.state.date).format('YYYY-MM-DD HH:mm:ss')}</h2>
      </div>
    )
  }
}

class App extends React.Component {
  state = {
    collapsed: false
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  onMenuHandle = e => {
    console.log(e)
    const path = e.key
    this.props.history.push(`/${path}`)
  }
  render(){
    return (
      <Layout>
        <Sider className="side-bar" trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo">
            <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt=""/>
          </div>
          <Menu theme="light" mode="inline" onClick={this.onMenuHandle}>
            <Menu.Item key="student" path="student">
              <Icon type="user"/>
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="sortable">
              <Icon type="video-camera"/>
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="learn">
              <Icon type="upload"/>
              <span>nav 3</span>
            </Menu.Item>
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
            <SubRoutes/>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
