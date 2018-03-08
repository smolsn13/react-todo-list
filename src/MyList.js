import React, { Component } from 'react';
import ListItem from './ListItem';
import './App.css';

class MyList extends Component {
  constructor(props) {
    super()
    this.state = {
      toDoItemArray: [],
      currentItem: '',
    }
  }

  componentDidMount() {
    this.textInput.focus()
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      currentItem: e.target.value
    })
  }

  addItem = (e) => {
    e.preventDefault()
    // checking if currentItem has text
    if (this.state.currentItem !== '') {
      // create a copy of the array
      let toDoItemArrayCopy = Array.from(this.state.toDoItemArray)
      // push a new item to the copy
      toDoItemArrayCopy.push(this.state.currentItem)
      // update the state with the copy
      this.setState({
        toDoItemArray: toDoItemArrayCopy,
        currentItem: ''
      })
    }
    this.textInput.focus()
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.addItem(e)
    }
  }

  clearList = (e) => {
    e.preventDefault()
    this.setState({
      toDoItemArray: []
    })
  }

  deleteItem = (e, index) => {
    let toDoItemArrayCopy = Array.from(this.state.toDoItemArray)
    toDoItemArrayCopy.splice(index, 1)
    this.setState({
      toDoItemArray: toDoItemArrayCopy
    })
    this.textInput.focus()
  }

  render() {

    let jsxTodos = this.state.toDoItemArray.map((listItem, index) => {
      return (<ListItem
      key={index}
      doThis={listItem}
      deleteItem={ (e) => this.deleteItem(e, index) }
      />)
    })

    return (
      <div className="App">
        <h1> Things I should stop putting off:</h1>
        <ul>
          {jsxTodos}
        </ul>
        <input type='text'
          ref={el => {
            this.textInput = el
          }}
          value={this.state.currentItem}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}/>
        <br />
        <br />
        <button onClick={this.addItem}>Add Item</button>
        <br />
        <button onClick={this.clearList}>Clear the List!</button>
      </div>
    );
  }
}

export default MyList;
