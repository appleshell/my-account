import React from 'react'
import axios from 'axios'
import { message } from 'antd'

export default class Event extends React.Component {

  state = { visible: false }

  addStudent = () => {
    this.setState({ visible: true })
  }
  handleOk = () => {
    this.setState({ visible: false })
  }
  handleCancel = () => {
    this.setState({ visible: false })
  }

  handleSubmit = async () => {
    const values = this.formRef.current.getFieldsValue()
    console.log(values)
    try {
      await axios.post('/user/register', values)
    } catch (err) {
      message.error(err.message || '系统错误')
    }
  }
}