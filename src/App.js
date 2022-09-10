// import logo from './logo.svg';
import "./App.css";
import React from "react";

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    var arr = [];
    this.arr = arr;
    this.state = {
      note: [],
    };
    this.addNote = this.addNote.bind(this);
    this.close = this.close.bind(this);
    this.TodoItem = this.TodoItem.bind(this);
    this.checkedNote = this.checkedNote.bind(this);
  }
  addNote() {
    const text = document.querySelector(".input");
    if (text.value !== "") {
      this.arr.push(text.value);
    }
    this.setState({
      note: this.arr,
    });
    text.value = "";
  }
  checkedNote(e) {
    var elem = e.target.parentElement;
    e.target.checked === true
      ? (elem.style.textDecoration = "line-through")
      : (elem.style.textDecoration = "inherit");
  }
  close(e) {
    e.preventDefault();
    e.target.parentElement.remove();
    var id = e.target.parentElement;
    this.arr.splice(id.dataset.id, id.dataset.id);
    this.setState({
      note: this.arr,
    });
  }
  TodoItem({ props, id }) {
    const styleCursor = {
      cursor: "pointer",
      display: "flex",
      justifyContent: "space-between",
    };
    return (
      <div style={styleCursor} data-id={id}>
        <input type="checkbox" onClick={this.checkedNote} />
        <span>{props}</span>
        <button onClick={this.close}>X</button>
      </div>
    );
  }
  render() {
    const todo = {
      width: "300px",
      margin: "50px auto",
    };
    return (
      <div style={todo}>
        {this.state.note.map((item, index) => {
          return <this.TodoItem props={item} key={index} id={index} />;
        })}
        <div>
          <input type="text" className="input" />
          <button onClick={this.addNote}>Add Note</button>
        </div>
      </div>
    );
  }
}

export default ToDo;
