import React from 'react'

class Event extends React.PureComponent {
  submitLogin = () => {
    console.log(this.state)
    this.props.history.push('/')
  }

  formChange = (value, key) => {
    this.setState({
      [key]: value
    })
  }
}

export default Event