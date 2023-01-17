import {Component} from 'react'
import {v4} from 'uuid'

import UserInputList from './components/UserInputList'

import './App.css'

// Replace your code here

export default class App extends Component {
  state = {list: [], userInput: ''}

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  getUserInput = event => {
    event.preventDefault()
    const {userInput} = this.state
    const newUserInput = {
      id: v4(),
      userText: userInput,
      userTextLength: userInput.length,
    }
    this.setState(prevState => ({
      list: [...prevState.list, newUserInput],
      userInput: '',
    }))
  }

  renderUserText = () => {
    const {list} = this.state
    return list.length === 0 ? (
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
        className="no-input-img"
      />
    ) : (
      list.map(eachItem => (
        <UserInputList key={eachItem.id} userTextDetails={eachItem} />
      ))
    )
  }

  render() {
    const {userInput} = this.state
    return (
      <div className="app-container">
        <div className="left-container">
          <h1 className="left-head">Count the characters like a Boss...</h1>
          {this.renderUserText()}
        </div>
        <div className="right-container">
          <h1 className="right-head">Character Counter</h1>
          <form className="input-container" onSubmit={this.getUserInput}>
            <input
              type="text"
              placeholder="Enter the Characters here"
              value={userInput}
              onChange={this.onChangeUserInput}
              className="input"
            />
            <button type="submit" className="btn">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}
