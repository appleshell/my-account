import React from 'react'
import { Modal, Form, Input } from 'antd'
import './style.scss'

const FormItem = Form.Item

const CountryModal = props => {
  const { isEdit, visible, confirm } = props

  const handleOk = () => {
    confirm()
  }
  return (
    <Modal
      className="country_modal"
      title={isEdit ? '新增国家' : '编辑国家'}
      visible={visible}
      onOk={handleOk}
    >
      <Form>
        <FormItem lable="国家名称" name="country">
          <Input placeholder="请输入" />
        </FormItem>
      </Form>
    </Modal>
  )
}

export default CountryModal
