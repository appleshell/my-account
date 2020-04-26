import React from 'react'
import {Input, Button} from 'antd'
import * as Sentry from '@sentry/browser'

class Search extends React.Component {

  state = {
    counter: 0,
    obj: {}
  }
  
  addStudent = () => {
    this.props.onShowModal()
  }

  test = () => {
    const { counter } = this.state
    this.setState({
      counter: counter + 1,
      obj: counter === 5 ? null : {}
    })
  }

  componentDidCatch(error, errorInfo) {
    Sentry.withScope((scope) => {
        scope.setExtras(errorInfo);
        const eventId = Sentry.captureException(error);
        this.setState({eventId});
        Sentry.showReportDialog({ eventId })
    });
  }

  render() {
    return (
      <div className="searchForm">
        <Input placeholder="请输入学生姓名"></Input>
        <Input placeholder="请输入学生学号"></Input>
        <Button type="primary" icon="search" onClick={this.test}>搜索</Button>
        <Button type="primary" icon="plus" onClick={this.addStudent}>新增</Button>
        <span>{this.state.obj.sd}</span>
      </div>
    )
  }
}

export default Search
