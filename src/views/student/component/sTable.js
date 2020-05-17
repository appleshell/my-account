import React, {Component} from 'react'
import {Table, Button} from 'antd'
import axios from 'axios'

class STable extends Component {
  state = {
    dataList: []
  }

  componentDidMount() {
    this.getData()
  }

  addStudent = () => {
    this.props.onShowModal()
  }

  columns = [
    {
      title: '序号',
      dataIndex: 'index',
      key: 'index'
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '学号',
      dataIndex: 'stuNumber',
      key: 'stuNumber'
    },
    {
      title: '性别',
      dataIndex: 'sex',
      key: 'sex'
    },
    {
      title: '备注',
      dataIndex: 'remark',
      key: 'remark'
    },
    {
      title: '操作',
      key: 'action',
      render: () => {
        return (
          <span>
            <Button size="small" type="link" onClick={this.addStudent}>编辑</Button>
            {/* <Divider type="vertical" dashed />
            <Divider dashed />
            <Button size="small" type="link">删除</Button> */}
          </span>
        )
      }
    },
  ]
  data = [
    {
      index: 1,
      name: '小红',
      stuNumber: '0101',
      sex: '女',
      remark: '班长'
    },
    {
      index: 2,
      name: '小刚',
      stuNumber: '0102',
      sex: '男',
      remark: ''
    },
    {
      index: 3,
      name: '小明',
      stuNumber: '0103',
      sex: '男',
      remark: ''
    },
  ]

  getData = async () => {
    const res = await axios.get('/user/get')
    console.log(res)
    const { data: {data: list}} = res
    this.setState({
      dataList: list.list
    })
  }

  render() {
    return <Table columns={this.columns} dataSource={this.state.dataList} />
  }

}

export default STable
