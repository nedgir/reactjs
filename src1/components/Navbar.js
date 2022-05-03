import React from 'react'

const Navbar = (props) => {
  return (
    <div>
        <ul>
{props.isLoggedIn && (
    <li><a href="/">Users</a></li>
)}
  {props.isLoggedIn && (
    <li><a href="/">Profile</a></li>
)}      </ul>
    </div>
  )
}

export default Navbar