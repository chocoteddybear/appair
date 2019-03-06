import React from "react";
import Passengers from "./Passengers";

export default function PassengersOnline(props) {
  return (
    <div className="passengers-online">
      <div className="passengers-online-title">Passengers online</div>
      <div className="passengers-online-avatars">
        <Passengers
          serverUrl={props.serverUrl}
          abbreviation={props.abbreviation}
          avatar={props.avatar}
        />
      </div>
    </div>
  );
}
