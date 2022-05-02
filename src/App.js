import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import { Inputform } from './components/Inputform';

function App() {
  var dummydata = [
    {id:1,hobby:"chess",dt:new Date(2000,1,21)},
    {id:2,hobby:"badminton",dt:new Date(2005,2,2)},
    {id:3,hobby:"watching movies",dt:new Date(2001,3,24)}
  ];
  const [hobbies,setHobbies] = useState(dummydata);
  function addHobbyMethod(hobby){
    setHobbies((previousHobbies)=>[hobby,...previousHobbies])
  }
  var title = "My hobbies"
  
  return (
    <div className="form-control">
      <h2>{title}</h2>
      <Login/>
     {/* <Inputform addHobby = {addHobbyMethod} />
     {hobbies.map(data => <Home key={data.id} id={data.id} hobby={data.hobby} dt = {data.dt}/>) } */}
    </div>
  );
}

export default App;
