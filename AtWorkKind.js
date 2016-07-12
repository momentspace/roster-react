import React from 'react'
import ReactDOM from 'react-dom'
import { ControlLabel } from 'react-bootstrap'

export default React.createClass({
  getInitialState() {
    return {
    }
  },
  render() {
    var kind = this.props.kind
    if (kind == 1) {
      return <ControlLabel>平日</ControlLabel>
    }
    else if (kind == 2) {
      return <ControlLabel>休日</ControlLabel>
    }
    else {
      return <ControlLabel>祝日</ControlLabel>
    }
  }
})
