import React, { Component } from "react";
import "../styles/reset.css";
import "../styles/App.css";

import InputForm from "./InputForm";
import List from "./List";
import Header from "./Header";

class App extends Component {

      state = {
      list: [],
      pendingItem: ""
    };

    handleRemove = index => {
      const newState = this.state.list.filter(item => {
        this.state.list.indexOf(item) !== index
      });

      this.setState({
        list: newState
      });
    };

  handleItemInput = e => {
    this.setState({
      pendingItem: e.target.value
    });
  }

  newItemSubmitHandler = e => {
    e.preventDefault();
    this.setState({
      list: [
        {
          name: this.state.pendingItem,
        },
        ...this.state.list
      ],
      pendingItem: ""
    });
  };

  render() {
    return (
      <div className="wrapper">
        <InputForm
          handleItemInput={this.handleItemInput}
          newItemSubmitHandler={this.newItemSubmitHandler}
          pendingItem={this.state.pendingItem}
        />

        <List list={this.state.list}
         handleRemove={this.handleRemove}
        />
      </div>
        );
      }
    }

export default App;
