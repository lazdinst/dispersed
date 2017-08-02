import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
//http://i.imgur.com/fsVzPon.png
const Header = () => (
  <header>
    <nav className="navbar navbar-default navbar-static-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            <img alt="Mars Weather" width="50px" src=""/>
          </a>
        </div>
        <div className="pull-right">
          <Link to='/'>Home</Link> | 
          <Link to='/roster'>Roster</Link> | 
          <Link to='/schedule'>Schedule</Link>
        </div>
      </div>
    </nav>
  </header>
)

export default Header