import React from 'react'

const Welcome = (props) => {
   const logoutMethod = () => {
props.onLogout();
    }
  return (
    <div>Welcome

<div><button onClick={logoutMethod}>Logout</button></div>

    </div>

  )
}

export default Welcome