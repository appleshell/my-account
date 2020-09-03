import React, { Component } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import { Upload, Button, message } from 'antd'
import { CloseOutlined, UploadOutlined } from '@ant-design/icons'
import { AsyncButton, RowItem } from 'my-component-doc'
import './style.scss'

import test from './test'

const SortableItem = SortableElement(({ value }) => <li className="sortName">{value}</li>);

const SortableList = SortableContainer(({ items }) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  );
});

class SortableComponent extends Component {
  state = {
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
    imgList: []
  }

  deleteImg = (index) => {
    let array = this.state.imgList;
    let newArray = [...array];
    console.log(index)
    newArray.splice(index, 1)
    this.setState({
      imgList: [...newArray]
    })
  }

  SortableItem1 = SortableElement(({ value, index }) => {
    return (
      <li className="sortName">
        <img style={{ width: '100%' }} src={value.response.url} alt="" />
        {index}
        <CloseOutlined onClick={() => this.deleteImg(index)} />
      </li>
    )
  });

  SortableList1 = SortableContainer(({ items }) => {
    return (
      <ul>
        {items.map((value, index) => {
          return <this.SortableItem1 key={`item-${index}`} index={index} value={value} />
        })}
      </ul>
    );
  });


  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ items }) => ({
      items: arrayMove(items, oldIndex, newIndex),
    }));
    console.log(this.state.items.name.ss)
  }
  onSortEnd1 = ({ oldIndex, newIndex }) => {
    this.setState(({ imgList }) => ({
      imgList: arrayMove(imgList, oldIndex, newIndex),
    }));
    console.log(this.state.imgList)
  }
  handleChange = info => {
    console.log(info)
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
      let array = this.state.imgList;
      let newArray = [...array];
      newArray.push(info.file)
      this.setState({
        imgList: [...newArray]
      })
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
  render() {
    return (
      <div>
        <SortableList axis="x" items={this.state.items} onSortEnd={this.onSortEnd} />
        <this.SortableList1 axis="x" items={this.state.imgList} onSortEnd={this.onSortEnd1} />
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          onChange={this.handleChange}
          showUploadList={false}
        >
          <Button>
            <UploadOutlined /> Click to Upload
          </Button>
        </Upload>
        <AsyncButton onClick={() => new Promise(resolve => setTimeout(resolve, 1500))}>click</AsyncButton>
        <RowItem label="时间：" showBorder>
          <span>2020-02-22 22:22:23</span>
        </RowItem>
        <RowItem label="内容标题：" showBorder>
          <div>这里可以写任何内容</div>
        </RowItem>
      </div>
    )
  }
}

export default SortableComponent
