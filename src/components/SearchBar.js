import React, { Component } from "react";

export default class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.textInput = null;

    this.setTextInputRef = element => {
      this.textInput = element;
    };

    this.focusTextInput = () => {
      if (this.textInput) this.textInput.focus();
    };

    this.state = { errors: '' }
  }

  componentDidMount() {
    this.focusTextInput();
  }

  submitForm = () => {
    const query = this.textInput.value
    if (!query) {
      const errors = 'empty search'
      this.setState({ errors }, () => {
        console.log(errors)
      })
      return
    }
    this.props.handleSubmit(query, 1);
    this.setState({ errors: '' })
  }

  keyUpListner = event => {
    if (event.keyCode === 13) {
      console.log('enter');
    }
    return;
  }

  render() {
    const isDisplay = !this.state.errors ? { display: 'none' } : {}
    return (
      <form onSubmit={e => { e.preventDefault(); }}>
        <div className="container">
          <div className="alert alert-warning" style={isDisplay}>
            <strong>Warning: </strong>Enter something to search
          </div>
          <div className="row">
            <div id="custom-search-input">
              <div className="input-group col-md-12">
                <input
                  type="text"
                  ref={this.setTextInputRef}
                  className="search-query form-control"
                  onKeyUp={this.keyUpListner}
                  placeholder="Search" />
                <span className="input-group-btn">
                  <button className="btn btn-danger" type="button" onClick={this.submitForm}>
                    <span className=" glyphicon glyphicon-search"></span>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </form >)
  }

}