import React from "react";
import { Dateformat } from "../Utility/Dateformat";
import "./Home.css";
export default function Home(props) {
  return (
    <div>
      <div className="div1">{props.hobby}
      </div>
      <div className="div1">
        Start date: <Dateformat dt={props.dt} />
      </div>
      
    </div>
  );
}
