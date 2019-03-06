import React from "react";
import "./App.css";
import PassengersChat from "./components/PassengersChat";
import PassengersOnline from "./components/PassengersOnline";
import Header from "./components/Header";

const serverUrl = "http://35.225.146.132:3000";

function App() {
  const abbreviation = fullName => {
    const abbreviation = fullName.split(" ");
    return abbreviation.map(x => x[0].toUpperCase());
  };

  const avatar = imageURL => {
    const avatarStyle = {
      backgroundColor: "transparent",
      backgroundImage: "url(" + serverUrl + imageURL + ")"
    };
    if (imageURL) {
      return avatarStyle;
    } else {
      return "";
    }
  };

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <PassengersOnline
          serverUrl={serverUrl}
          abbreviation={abbreviation}
          avatar={avatar}
        />
        <div className="passengers-chats">
          <PassengersChat
            serverUrl={serverUrl}
            abbreviation={abbreviation}
            avatar={avatar}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
