import React from 'react'
import ReactDOM from 'react-dom'
import AtWork from './AtWork'
import LeaveWork from './LeaveWork'
import { FormGroup, Panel, Col, ControlLabel } from 'react-bootstrap'

export default React.createClass({
  getDefaultProps() {
    return {
    }
  },
  getInitialState() {
    return {
    }
  },

  render() {
    console.log(days)
    console.log(month)

    var days = this.props.days
    var month = this.props.month

    if (month == '') {
      return <div className="rosterCalendar"></div>
    }
    return (
      <Col componentClass={Panel} sm={10} smOffset={1}>
        <FormGroup className="rosterCalendar" controlId="rosterCalendar">
          <h2>{month}月の勤務表</h2>
          <FormGroup controlId="formMonthBox">
            <Col sm={1} componentClass={ControlLabel}>日　曜日</Col>
            <Col sm={1} componentClass={ControlLabel}>出勤区分</Col>
            <Col sm={1} componentClass={ControlLabel}>勤務区分</Col>
            <Col sm={1} componentClass={ControlLabel}>出勤時刻</Col>
            <Col sm={1} componentClass={ControlLabel}>退勤時刻</Col>
            <Col sm={1} componentClass={ControlLabel}>時間内作業時間</Col>
            <Col sm={1} componentClass={ControlLabel}>休憩時間</Col>
            <Col sm={1} componentClass={ControlLabel}>普通残業</Col>
            <Col sm={1} componentClass={ControlLabel}>深夜残業</Col>
            <Col sm={1} componentClass={ControlLabel}>深夜勤務</Col>
            <Col sm={1} componentClass={ControlLabel}>私用外出</Col>
            <Col sm={1} componentClass={ControlLabel}>実働時間</Col>
          </FormGroup>
           {
            this.props.days.map(function(day) {
              return (
                <FormGroup controlId="formMonthBox">
                  <Col sm={1} componentClass={ControlLabel} key="label{day}">{day} 月</Col>
                  <Col sm={1} componentClass={ControlLabel}>平日</Col>
                  <Col sm={1} componentClass={ControlLabel}>通常</Col>
                  <Col sm={1}>
                    <AtWork key="AtWork{day}" />
                  </Col>
                  <Col sm={1}>
                    <LeaveWork key="LeaveWork{day}" />
                  </Col>
                </FormGroup>
              )
            })
          }
        </FormGroup>
      </Col>
    )
  }
})


