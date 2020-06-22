import React, { useEffect, useState } from 'react'
import { Table, Layout, Button } from 'antd'
import CountryModal from '../components/countryModal'
import './style.scss'

const tableColumn = [
  {
    title: '国旗',
    key: 'flag',
  },
  {
    title: '中文简称',
    key: 'cnName',
  },
  {
    title: '英文简称',
    key: 'cnName',
  },
  {
    title: 'ISO 2',
    key: 'iso_2',
  },
  {
    title: 'ISO 3',
    key: 'iso_3',
  },
  {
    title: '数字代码',
    key: 'numCode',
  },
  {
    title: '电话区号',
    key: 'phoneCode',
  },
  {
    title: '域名后缀',
    key: 'domainSuffix',
  },
]

const CountryView = () => {
  const [modalVisible, setModalVisible] = useState(false)

  const addCountry  = () => {
    setModalVisible(true)
  }

  const confirm = () => {
    setModalVisible(false)
  }

  return <Layout className="page_country_list">
    <div className="searchBar"></div>
    <div className="operateBar">
      <Button type="primary" onClick={addCountry}>添加</Button>
    </div>
    <Table columns={tableColumn}></Table>
    <CountryModal visible={modalVisible} confirm={confirm} />
  </Layout>
}

export default CountryView
