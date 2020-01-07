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

  addModal(){
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
        <Form>
          <Form.Item>
            <Input placeholder="请输入学生姓名"/>
          </Form.Item>
          <Form.Item>
            <Select placeholder="请输入学生姓名">
              <Option value="girl">女</Option>
              <Option value="boy">男</Option>
            </Select>
          </Form.Item>
          <Form.Item>
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
