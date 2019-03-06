import React, { Component } from "react";
import "./App.css";
import PassengersChat from "./components/PassengersChat";
import PassengersOnline from "./components/PassengersOnline";
import Header from "./components/Header";

const serverUrl = "http://35.225.146.132:3000";

class App extends Component {
  abbreviation(fullName) {
    const abbreviation = fullName.split(" ");
    return abbreviation.map(x => x[0].toUpperCase());
  }

  avatar(imageURL) {
    const avatarStyle = {
      backgroundColor: "transparent",
      backgroundImage: "url(" + serverUrl + imageURL + ")"
    };
    if (imageURL) {
      return avatarStyle;
    } else {
      return "";
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main className="main-content">
          <PassengersOnline
            serverUrl={serverUrl}
            abbreviation={this.abbreviation}
            avatar={this.avatar}
          />
          <div className="passengers-chats">
            <PassengersChat
              serverUrl={serverUrl}
              abbreviation={this.abbreviation}
              avatar={this.avatar}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
