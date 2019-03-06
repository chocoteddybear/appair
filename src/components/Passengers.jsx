import React from "react";
import "../App.css";

const path = "http://35.225.146.132:3000/api/chat/available";

export default class Passengers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      passengersOnlineList: []
    };
  }

  componentDidMount() {
    const options = {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: "b32f9a44-151b-46ed-8cba-1eaeb58360df",
        "cache-control": "no-cache"
      })
    };

    return fetch(path, options)
      .then(response => response.json())
      .then(passengersOnlineList => {
        this.setState({
          passengersOnlineList
        });
      });
  }

  render() {
    const passengersOnline = this.state.passengersOnlineList.map(
      passengerOnline => (
        <div
          key={passengerOnline.id}
          className="passengers-online-circle"
          style={this.props.avatar(passengerOnline.avatar)}
        >
          {!passengerOnline.avatar && (
            <div className="passengers-online-abbreviation">
              {this.props.abbreviation(passengerOnline.fullName)}
            </div>
          )}
        </div>
      )
    );
    return passengersOnline;
  }
}
