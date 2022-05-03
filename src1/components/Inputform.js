import React, { useState } from 'react'

export const Inputform = (props) => {
    const [title,setTitle] = useState('');
    const [dt,setDt] = useState('');
function dateHandler(event){
    var dtInput = event.target.value;
    setDt(dtInput);
}
    function titleHandler(event){
        var titleInput = event.target.value;
setTitle(titleInput);
    }
    function addHobby(event){
        event.preventDefault();
        var newhobby = {id:Math.floor(Math.random()*101),hobby:title,dt:new Date(dt)};
        props.addHobby(newhobby);
    }
    
  return (
    <>
         <form onSubmit={addHobby}>
        <div>
        <label>Title</label><input type="text" value={title} onChange={titleHandler} />
        </div>
        <div>
        <label>Start date</label><input type="date" onChange={dateHandler}/>
        </div>
        <div>
          <button type="submit" className='btn btn-secondary'>Add Hobby</button>
        </div>
      </form>
    </>
  )
}
