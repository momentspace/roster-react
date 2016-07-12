import React from 'react'
import ReactDOM from 'react-dom'
import { FormControl } from 'react-bootstrap'

export default React.createClass({
  getInitialState() {
    return {
    }
  },
  render() {
    var kind = this.props.defaultKind
    return (
      <FormControl componentClass="select" placeholder="通常">
        <option value="1">通常</option>
        <option value="2">休日</option>
        <option value="3">休日出勤</option>
      </FormControl>
    )
  }
})
