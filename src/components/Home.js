import React from "react";
import { Dateformat } from "../Utility/Dateformat";
import "./Home.css";
export default function Home(props) {
  return (

    <div className="card div1">
      <div className="card-body">id: {props.id}
      </div>
      <div className="card-text div1">Hobbie: {props.hobby}
      </div>
      <div className="card-footer div1">
        Start date: <Dateformat dt={props.dt} />
      </div>
      
    </div>
  );
}
