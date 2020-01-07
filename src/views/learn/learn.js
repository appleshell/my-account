import React from 'react';
import RippleButton from './components/RippleButton'

class Learn extends React.Component {
  render() {
    return (
      <div className="learn">
        <RippleButton
          onClick={ e => console.log(e)}
        >
          Click me
        </RippleButton>
      </div>
    )
  }
}

export default Learn
