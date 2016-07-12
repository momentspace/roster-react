import React from 'react'
import ReactDOM from 'react-dom'
import AtWork from './AtWork'
import LeaveWork from './LeaveWork'
import AtWorkKind from './AtWorkKind'
import WorkKind from './WorkKind'
import Outing from './Outing'
import { FormGroup, Panel, Col, ControlLabel, Table } from 'react-bootstrap'

export default React.createClass({
  propTypes: {
    month: React.PropTypes.number.isRequested,
    month: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
  },

  getDefaultProps() {
    return {
    }
  },
  getInitialState() {
    return {
    }
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
    console.log(month)

    var month = this.props.month
    var days = this.monthToDays(this.props.month)
    var kind = 1
    var defaultKind = 1

    if (month == '') {
      return <div className="rosterCalendar"></div>
    }
    return (
      <Col componentClass={Panel} sm={10} smOffset={1}>
        <FormGroup className="rosterCalendar" controlId="rosterCalendar">
          <h2>{month}月の勤務表</h2>
          <FormGroup controlId="formMonthBox">
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th>日</th>
                  <th>曜日</th>
                  <th>出勤区分</th>
                  <th>勤務区分</th>
                  <th>出勤時刻</th>
                  <th>退勤時刻</th>
                  <th>時間内作業時間</th>
                  <th>休憩時間</th>
                  <th>普通残業</th>
                  <th>深夜残業</th>
                  <th>深夜勤務</th>
                  <th>私用外出</th>
                  <th>実働時間</th>
                </tr>
              </thead>
              <tbody>
              {
                days.map(function(day) {
                  return (
                    <tr>
                      <td key="label{day}">{day}</td>
                      <td>曜日</td>
                      <td><AtWorkKind kind={kind}/></td>
                      <td><WorkKind kind={defaultKind}/></td>
                      <td><AtWork key="AtWork{day}" /></td>
                      <td><LeaveWork key="LeaveWork{day}" /></td>
                      <td>00:00</td>
                      <td>00:00</td>
                      <td>00:00</td>
                      <td>00:00</td>
                      <td>00:00</td>
                      <td><Outing /></td>
                      <td>00:00</td>
                    </tr>
                  )
                })
              }
              </tbody>
             </Table>
          </FormGroup>
       </FormGroup>
      </Col>
    )
  }
})


