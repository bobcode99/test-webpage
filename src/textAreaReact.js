import React from "react";

class TextAreaReact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "write something:" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert("An essay was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
          />{" "}
        </label>
        <input type="submit" value="Submit" />
        <br />
        <br />
        <input type="color" id="color" name="color"></input>
        <br />
        <br />
        <label for="date">Date:</label>
        <input type="date" id="date" name="date"></input>
        <br />
        <br />
        <label for="datetime-local">Datetime-local:</label>
        <input
          type="datetime-local"
          id="datetime-local"
          name="datetime-local"
        ></input>
        <br />
        <br />
        <label for="month">Month:</label>
        <input type="month" id="month" name="month"></input>
        <br />
        <br />
        <label for="range">Range:</label>
        <input type="range" id="range" name="range"></input>
        <br />
        <br />
        <label for="time">Time:</label>
        <input type="time" id="time" name="time"></input>
        <br />
        <br />
        <label for="week">Week:</label>
        <input type="week" id="week" name="week"></input>
        <br />
      </form>
    );
  }
}

export default TextAreaReact;
