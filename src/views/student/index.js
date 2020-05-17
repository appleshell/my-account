import React, {Component} from 'react'
import {Form, Input, Button, Modal, Select} from 'antd'
import STable from './component/sTable'
import Search from './component/search'
import './style.css'
const {Option} = Select
const {TextArea} = Input

class Student extends Component {

  state = {visible:false}

  addStudent = () => {
    this.setState({visible:true})
  }
  handleOk = () => {
    this.setState({visible:false})
  }
  handleCancel = () => {
    this.setState({visible:false})
  }

  handleSubmit = (values) => {
    console.log(values)
  }

  addModal(){
    const layout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 }
    }
    return (
      <Modal
        title="新增学生"
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        footer={[
          <Button>取消</Button>,

        ]}
      >
        <Form {...layout} onFinish={this.handleSubmit}>
          <Form.Item label="学生姓名" name="name">
            <Input placeholder="请输入学生姓名"/>
          </Form.Item>
          <Form.Item label="性别" name="sex">
            <Select placeholder="请选择性别">
              <Option value="0">女</Option>
              <Option value="1">男</Option>
            </Select>
          </Form.Item>
          <Form.Item label="备注" name="remark">
            <TextArea placeholder="请输入备注"/>
          </Form.Item>
        </Form>
      </Modal>
    )
  }

  render() {
    return (
      <div className="student">
        <Search onShowModal={this.addStudent} />
        <STable onShowModal={this.addStudent} />
        {this.addModal()}
      </div>
    )
  }

}

export default Student
