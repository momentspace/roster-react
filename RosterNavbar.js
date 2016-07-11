import React from 'react'
import ReactDom from 'react-dom'
import RosterForm from './RosterForm'
import { Navbar, Nav } from 'react-bootstrap'

export default React.createClass({
  getInitialState() {
    return {
      month: ''
    }
  },
  
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            勤務表
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>

        </Nav>
      </Navbar>
    )
  }
})

