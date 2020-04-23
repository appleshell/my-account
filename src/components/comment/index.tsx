import * as React from 'react'
import './style.scss'
import cn from 'classnames'

interface CommentProps {
  content: React.ReactNode
  author?: React.ReactNode
  avatar?: React.ReactNode
  dateTime?: React.ReactNode
  className?: string
}

const Comment: React.FC<CommentProps> = props => {
  const { content, author, avatar, dateTime, className } = props
  const prefixCls = 'x-comment'

  const avatarDom = (
    <div className={`${prefixCls}-avatar`}>
      {typeof avatar === 'string' ? <img src={avatar} alt="comment-avatar" /> : avatar}
    </div>
  )

  const authorContent = (
    <div className={`${prefixCls}-content-author`}>
      {author && <span className={`${prefixCls}-content-author-name`}>{author}</span>}
      {dateTime && <span className={`${prefixCls}-content-author-time`}>{dateTime}</span>}
    </div>
  )

  const contentDom = (
    <div className={`${prefixCls}-content`}>
      {authorContent}
      <div className={`${prefixCls}-content-detail`}>{content}</div>
    </div>
  )

  const comment = (
    <div className={`${prefixCls}-inner`}>
      {avatarDom}
      {contentDom}
    </div>
  )

  const classStrimg = cn(prefixCls, className)
  return <div className={classStrimg}>{comment}</div>
}

export default Comment
