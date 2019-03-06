import React from "react";
import "../App.css";

const path = "http://35.225.146.132:3000/api/chat/list";

export default class PassengersChat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chatList: []
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
      .then(chatList => {
        this.setState({
          chatList
        });
      });
  }

  render() {
    const chats = this.state.chatList.map(chat => (
      <div key={chat.id} className="passengers-chat">
        <div
          className="passengers-chat-circle"
          style={this.props.avatar(chat.members[0].avatar)}
        >
          {!chat.members[0].avatar && (
            <div className="passengers-chat-abbreviation">
              {this.props.abbreviation(chat.members[0].fullName)}
            </div>
          )}
          <div
            className={
              chat.members[0].status === "OFFLINE"
                ? "passengers-chat-status-offline"
                : "passengers-chat-status-online"
            }
          />
        </div>
        <div className="passengers-chat-data">
          <div className="passengers-chat-name">{chat.members[0].fullName}</div>
          <div className="passengers-chat-last-message">
            {chat.lastMessage === undefined ? "" : chat.lastMessage.text}
          </div>
        </div>
      </div>
    ));
    return chats;
  }
}
