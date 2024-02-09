import './index.css'

import {Component} from 'react'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

import AddtodoItem from '../TodoItem'

class SimpleTodos extends Component {
  state = {todoList: initialTodosList}

  deleteItem = id => {
    const {todoList} = this.state
    const filteredItems = todoList.filter(eachItem => eachItem.id !== id)
    this.setState({todoList: filteredItems})
  }

  render() {
    const {todoList} = this.state
    return (
      <div className="appcontainer">
        <div className="cardcontainer">
          <h1 className="heading">Simple Todos</h1>
          <ul className="listItems">
            {todoList.map(eachItem => (
              <AddtodoItem
                deleteItem={this.deleteItem}
                todoItem={eachItem}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
