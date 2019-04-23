import React from "react";

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
