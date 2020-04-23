import React from 'react'
import './style.scss'
import Comment from '../../../components/comment'
import Avatar from '../../../components/avatar'
import dayjs from 'dayjs'

const Demo: React.FC = () => {
  const content = (
    <p>
      We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.
    </p>
  )
  return (
    <div className="comment-demo comment-demo-basic">
      <Comment
        avatar={<Avatar>U</Avatar>}
        author="Han solo"
        dateTime={dayjs().format('YYYY-MM-DD HH:mm:ss')}
        content={content}
      />
    </div>
  )
}

export default Demo
