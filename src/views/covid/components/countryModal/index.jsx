import React from 'react'
import { Modal } from 'antd'
import './style.scss'

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
    ></Modal>
  )
}

export default CountryModal
