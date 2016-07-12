import React from 'react'
import ReactDOM from 'react-dom'
import { FormControl } from 'react-bootstrap'

export default React.createClass({
  getInitialState() {
    return {
    }
  },
  render() {
    return (
      <FormControl type="text" placeholder="9:30" />
    )
  }
})
