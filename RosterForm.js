import React from 'react'
import ReactDOM from 'react-dom'
import RosterMonthBox from './RosterMonthBox'
import RosterCalendar from './RosterCalendar'
import { Form, Container } from 'react-bootstrap'

export default React.createClass({
  getInitialState() {
    return {
      month: '',
      days: []
    }
  },

  onInputMonth(month) {
    this.setState({
      month: month,
      days: this.monthToDays(month)
    })
    console.log("onInputMonth " + month)
    console.log(this.monthToDays(month))
    console.log(this.state.month)
  },

  monthToDays(month) {
    if (month == '') return []
    var year = new Date().getYear() + 1900
    var daysCount = new Date(parseInt(year, 10), parseInt(month, 10), 0).getDate()
    var days = [...Array(daysCount+1).keys()]
    days.shift()
    return days
  },

  render() {
    return (
      <Form horizontal className="rosterForm" onSubmit={this.handleSubmit}>
        <RosterMonthBox onInputMonth={this.onInputMonth} />
        <RosterCalendar month={this.state.month} days={this.state.days}/>
      </Form>
    )
  }
})


