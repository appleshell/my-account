import React from 'react'
// import RippleButton from './components/RippleButton'
import { Button, Table, Input } from 'antd'
import axios from 'axios'
import dayjs from 'dayjs'

class Learn extends React.Component {
  state = {
    country: '',
    dataList: [],
    tableData: [],
  }
  getDate = () => {
    console.log('sdfds')
    axios.get('https://dashboards-dev.sprinklr.com/data/9043/global-covid19-who-gis.json')
      .then(res => {
        const { data } = res
        const { rows = [] } = data
        this.setState({
          dataList: rows,
          tableData: rows
        })
      })
  }

  handleChange = (e) => {
    this.setState({
      country: e.target.value.toUpperCase()
    })
  }

  filterByCountry = () => {
    const { country, dataList } = this.state
    const data = dataList.filter(item => item[1] === country)
    this.setState({
      tableData: data.length ? data : dataList
    })
  }

  columns = [
    {
      title: '日期',
      key: '0',
      dataIndex: 0,
      render: (text, record) => dayjs(record[0]).format('YYYY-MM-DD HH:mm:ss')
    },
    {
      title: '国家',
      key: '1',
      render: (text, record) => record[1]
    },
    {
      title: '大区',
      key: '2',
      render: (text, record) => record[2]
    },
    {
      title: '新增死亡人数',
      key: '3',
      render: (text, record) => record[3]
    },
    {
      title: '累计死亡人数',
      key: '4',
      render: (text, record) => record[4]
    },
    {
      title: '新增确诊人数',
      key: '5',
      render: (text, record) => record[5]
    },
    {
      title: '累计确诊人数',
      key: '6',
      render: (text, record) => record[6]
    },
  ]
  render() {
    return (
      <div className="learn">
        <div className="searchBar" style={{ margin: '12px 0', display: 'flex'}}>
          <Button onClick={this.getDate}>Get</Button>
          <Input placeholder="请输入国家简称" onChange={this.handleChange} />
          <Button type="primary" onClick={this.filterByCountry}>search</Button>
        </div>
        <Table bordered columns={this.columns} dataSource={this.state.tableData}></Table>
      </div>
    )
  }
}

export default Learn
