import React from 'react'

export const Dateformat = (props) => {
  return (
    <div>{props.dt.toLocaleString('en-US',{month:'long'})}
    {props.dt.toLocaleString('en-US',{day:'2-digit'})},&nbsp;
        {props.dt.getFullYear()}</div>
  )
}
