import React from 'react'
import moment from 'moment'

interface IClockProps {}

interface IState {
  date: any
}

class Clock extends React.Component<IClockProps, IState> {
  constructor(props: IClockProps) {
    super(props)
    this.state = { date: new Date() }
  }

  private timerID:any

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timerID as any)
  }
  tick() {
    this.setState({
      date: new Date(),
    })
  }
  render() {
    return (
      <div style={{ float: 'right' }}>
        <h2 style={{ color: '#fff', fontSize: '16px' }}>
          {moment(this.state.date).format('YYYY-MM-DD HH:mm:ss')}
        </h2>
      </div>
    )
  }
}

export default Clock
