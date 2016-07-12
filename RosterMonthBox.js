import React from 'react'
import ReactDom from 'react-dom'
import { FormGroup, FormControl, ControlLabel, Grid, Row, Col } from 'react-bootstrap'

export default React.createClass({
  getInitialState() {
    return {
      month: ''
    }
  },

  changeMonth(e) {
    this.setState({month: e.target.value})
    this.props.onInputMonth(e.target.value)
    console.log("changeMonth")
  },

  render() {
    return (
      <FormGroup controlId="formMonthBox">
        <Col sm={2} componentClass={ControlLabel}>勤務月</Col>
        <Col sm={1}>
          <FormControl type="text" value={this.state.month} onChange={this.changeMonth} />
        </Col>
      </FormGroup>
    )
  }
})


