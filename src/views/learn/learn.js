import React from 'react'
import RippleButton from './components/RippleButton'
import { Avatar } from 'antd'

class Learn extends React.Component {
  render() {
    return (
      <div className="learn">
        <RippleButton onClick={e => console.log(e)}>Click me</RippleButton>
        <Avatar size={64}>M</Avatar>
        <Avatar size={100}>M</Avatar>
        <Avatar size={30}>M</Avatar>
        <Avatar size="large">M</Avatar>
      </div>
    )
  }
}

export default Learn
