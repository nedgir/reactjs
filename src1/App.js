import { useState, useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import { Inputform } from './components/Inputform';
import Welcome from './Welcome';
import Navbar from './components/Navbar';

function App() {
  useEffect(()=>{
    const currentLogin = localStorage.getItem("isLoggedIn");
    if (currentLogin === "1"){
    setIsLoggedIn(true);
    }
  },[]);

  var dummydata = [
    {id:1,hobby:"chess",dt:new Date(2000,1,21)},
    {id:2,hobby:"badminton",dt:new Date(2005,2,2)},
    {id:3,hobby:"watching movies",dt:new Date(2001,3,24)}
  ];
  const [hobbies,setHobbies] = useState(dummydata);
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  
  
  function addHobbyMethod(hobby){
    setHobbies((previousHobbies)=>[hobby,...previousHobbies])
  }
  var title = "My hobbies"
  const loginHandler = (email,password) =>{
    localStorage.setItem('isLoggedIn','1');
    setIsLoggedIn(true);

  }
  const logoutHandler = () =>{
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  }
  return (
    <div className="form-control">
      <Navbar isAuthenticated = {isLoggedIn} />
      {!isLoggedIn && <Login onLogin = {loginHandler}/>}
     {isLoggedIn && <Welcome onLogout = {logoutHandler}/>
     /* <Inputform addHobby = {addHobbyMethod} />
     {hobbies.map(data => <Home key={data.id} id={data.id} hobby={data.hobby} dt = {data.dt}/>) } */}
    </div>
  );
}

export default App;
