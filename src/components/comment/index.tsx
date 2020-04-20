import * as React from 'react'
import './style.scss'
import cn from 'classnames'

interface CommentProps {
  content: React.ReactNode;
  author?: React.ReactNode;
  avatar?: React.ReactNode;
  dateTime?: React.ReactNode;
  className?: string
}

class Comment extends React.Component<CommentProps, {}> {
  render() {
    const { content, author, avatar, dateTime, className, children } = this.props
    const prefixCls = 'x-comment'
    const classStrimg = cn(prefixCls, className)
    return <div className={classStrimg}>评论组件</div>
  }
}

export default Comment
