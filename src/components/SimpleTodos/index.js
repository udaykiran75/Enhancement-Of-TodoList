import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import AddtodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
    isChecked: false,
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
    isChecked: false,
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
    isChecked: false,
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
    isChecked: false,
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
    isChecked: false,
  },
  {
    id: 6,
    title: 'Fix the production issue',
    isChecked: false,
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
    isChecked: false,
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
    isChecked: false,
  },
]

class SimpleTodos extends Component {
  state = {todoList: initialTodosList, inputTitle: '', showErrorMsg: false}

  onAddNewTodoItem = () => {
    const {inputTitle} = this.state

    if (inputTitle !== '') {
      const newTodo = {
        id: uuidv4(),
        title: inputTitle,
        isChecked: false,
      }
      this.setState(prevState => ({
        todoList: [...prevState.todoList, newTodo],
        inputTitle: '',
        showErrorMsg: false,
      }))
    } else {
      this.setState({showErrorMsg: true})
    }
  }

  onUpdateTodoItem = (todoId, title) => {
    this.setState(prevState => ({
      todoList: prevState.todoList.map(item =>
        item.id === todoId ? {...item, title} : item,
      ),
    }))
  }

  deleteItem = id => {
    const {todoList} = this.state
    const filteredItems = todoList.filter(eachItem => eachItem.id !== id)
    this.setState({todoList: filteredItems})
  }

  onChangeInputTitle = event => {
    this.setState({inputTitle: event.target.value})
  }

  onChangeChecked = todoId => {
    this.setState(prevState => ({
      todoList: prevState.todoList.map(item =>
        item.id === todoId ? {...item, isChecked: !item.isChecked} : item,
      ),
    }))
  }

  render() {
    const {todoList, inputTitle, showErrorMsg} = this.state
    return (
      <div className="appcontainer">
        <div className="cardcontainer">
          <h1 className="heading">Simple Todos</h1>
          <div className="mt-3 text-center">
            <input
              type="text"
              value={inputTitle}
              placeholder="Enter todo title"
              onChange={this.onChangeInputTitle}
              className="userInput-field"
            />
            <button
              className="btn btn-primary add-button"
              onClick={this.onAddNewTodoItem}
              type="button"
            >
              Add
            </button>
            {showErrorMsg && (
              <p className="text-danger">Please enter todo title</p>
            )}
          </div>
          <ul className="listItems">
            {todoList.map(eachItem => (
              <AddtodoItem
                key={eachItem.id}
                deleteItem={this.deleteItem}
                onChangeChecked={this.onChangeChecked}
                onUpdateTodoItem={this.onUpdateTodoItem}
                todoItem={eachItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
