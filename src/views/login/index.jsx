import React from 'react'
import Event from './event'
import './style.scss'
import { Input, Button} from 'antd'

class Login extends Event {

  state = {
    userName: '',
    password: ''
  }

  componentDidMount() {
    console.log('咋了')
  }
  render() {
    return (
      <div className="loginWrap">
        <div className="loginArea">
          <h1>
            <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt=""/>
          </h1>
          <div className="loginForm">
            <div className="formItem">
              <Input size="large" placeholder="请输入账号" onChange={(e) => this.formChange(e.target.value, 'userName')}></Input>
            </div>
            <div className="formItem">
              <Input size="large" type="password" placeholder="请输入密码" onChange={(e) => this.formChange(e.target.value, 'password')}></Input>
            </div>
            <div className="formItem">
              <Button size="large" type="primary" onClick={this.submitLogin}>登&nbsp;&nbsp;&nbsp;&nbsp;录</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login