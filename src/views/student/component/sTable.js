import React, {Component} from 'react'
import {Table, Divider, Button} from 'antd'

class STable extends Component {

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
            <Divider type="vertical" />
            <Button size="small" type="link">删除</Button>
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

  render() {
    return <Table columns={this.columns} dataSource={this.data} />
  }

}

export default STable
