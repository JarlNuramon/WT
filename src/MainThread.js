import Thread from "./Thread.js";
import React from "react";
class MainThread extends Thread {
  constructor(props) {
    super(props);
    //this.id = props.id;
    //this.author = props.author;
    //this.date = new Date();
    this.safetyLevel = props.safetyLevel;
    this.depthLevel = props.depthLevel;
    this.superpin = props.superpin;
    this.pinned = props.pinned;
    this.tag = props.tag;
    this.subthreads = props.subthreads;
  }
  render() {
    return <div id={this.id}>{this.text} </div>;
  }
}
