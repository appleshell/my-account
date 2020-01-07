import React from 'react'
import {Input, Button} from 'antd'

class Search extends React.Component {
  
  addStudent = () => {
    this.props.onShowModal()
  }

  render() {
    return (
      <div className="searchForm">
        <Input placeholder="请输入学生姓名"></Input>
        <Input placeholder="请输入学生学号"></Input>
        <Button type="primary" icon="search">搜索</Button>
        <Button type="primary" icon="plus" onClick={this.addStudent}>新增</Button>
      </div>
    )
  }
}

export default Search
