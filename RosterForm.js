import React from 'react'
import ReactDOM from 'react-dom'
import RosterMonthBox from './RosterMonthBox'
import RosterCalendar from './RosterCalendar'
import { Form, Container } from 'react-bootstrap'

export default React.createClass({
  getInitialState() {
    return {
      month: '',
    }
  },

  onInputMonth(month) {
    this.setState({
      month: month,
    })
    console.log("onInputMonth " + month)
    console.log(month)
  },

  render() {
    return (
      <Form horizontal className="rosterForm" onSubmit={this.handleSubmit}>
        <RosterMonthBox onInputMonth={this.onInputMonth} />
        <RosterCalendar month={this.state.month} datas={this.state.props}/>
      </Form>
    )
  }
})


