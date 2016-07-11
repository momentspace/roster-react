import React from 'react'
import ReactDom from 'react-dom'
import RosterForm from './RosterForm'
import RosterNavbar from './RosterNavbar.js'

export default React.createClass({
  getInitialState() {
    return {
      month: ''
    }
  },
  
  onInputFinish() {
    
  },

  render() {
    return (
      <div className="rosterBox">
        <RosterNavbar />
        <RosterForm onInputFinish={this.onInputFinish} />
      </div>
    )
  }
})

