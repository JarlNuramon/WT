import React from "react";
import ReactDOM from "react-dom";
//import MainThread from "./MainThread.js";

import "./styles.css";
class Thread extends React.Component {
  constructor(props) {
    super();
    this.id = props.id;
    this.author = props.author;
    this.date = new Date();
    this.safetyLevel = props.safetyLevel;
    this.depthLevel = props.depthLevel;
    this.subthreads = props.subthreads;
    this.text = props.text;
  }
}
class Subthread extends Thread {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.subthreads == null)
      return (
        <div id={this.id} class="sub">
          {this.text} <br />
        </div>
      );

    return (
      <div class="box">
        <div id={this.id} class="sub">
          {this.text} <br />{" "}
        </div>
        <ul>
          {this.subthreads.map(subthread => (
            <li key={subthread.id}>
              <Subthread
                id={subthread.id}
                text={subthread.text}
                subthreads={subthread.subthreads}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
class MainThread extends Thread {
  constructor(props) {
    super(props);

    this.date = new Date().toUTCString();
    this.safetyLevel = props.safetyLevel;
    this.depthLevel = props.depthLevel;
    this.superpin = props.superpin;
    this.pinned = props.pinned;
    this.tag = props.tag;
    this.subthreads = props.subthreads;
  }

  render() {
    return (
      <div id={this.id}>
        <div class="main" key={this.id}>
          {this.text} <br />
          <div class="date">{this.date}</div> <br />
        </div>
        <ul>
          {this.subthreads.map(subthread => (
            <li key={subthread.id}>
              <Subthread
                id={subthread.id}
                text={subthread.text}
                subthreads={subthread.subthreads}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
function App() {
  let json = require("./thread.json");
  var thread = new MainThread(json);
  return (
    <div className="App">
      <MainThread
        id={thread.id}
        author={thread.author}
        safetyLevel={thread.safetyLevel}
        depthLevel={thread.depthLevel}
        superpin={thread.superpin}
        pinned={thread.pinned}
        tag={thread.tag}
        subthreads={thread.subthreads}
        text={thread.text}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
/*
{
    id: 1,
    author: "Person",
    safetyLevel: "Non",
    depthLevel: 0,
    superpin: false,
    pinned: ["Hans", "Peter"],
    tag: ["Math", "Müller-Schneiders"],
    subthreads: [
      {
        id: 2,
        text: "Hallos",
        subthreads: [
          { id: 6, text: "This is a subthread" },
          { id: 7, text: "This is another subthread" }
        ]
      },
      { id: 3, text: "Hallos" },
      { id: 4, text: "Hallos" },
      { id: 5, text: "Hallos" }
    ],
    text: "FEUER!!!!"
  }
*/
