import './index.css'
import {useState} from 'react'

const AddtodoItem = props => {
  const [inputField, setInputField] = useState('')
  const [isEditing, setEdited] = useState(false)

  const {todoItem, deleteItem, onChangeChecked, onUpdateTodoItem} = props
  const {id, title, isChecked} = todoItem

  const onClickEditBtn = () => {
    setInputField(title)
    setEdited(true)
  }

  const onClickSaveBtn = () => {
    onUpdateTodoItem(id, inputField)
    setEdited(false)
  }

  const onUpdateInput = event => {
    setInputField(event.target.value)
  }

  const onDelete = () => {
    deleteItem(id)
  }

  const onClickChecbox = () => {
    onChangeChecked(id)
  }

  const textDeco = isChecked ? 'line-through' : ''

  return isEditing ? (
    <div className="mt-3 mb-3 edit-container">
      <input
        type="text"
        value={inputField}
        onChange={onUpdateInput}
        className="edit-inputfield"
      />
      <button className="save-btn" onClick={onClickSaveBtn} type="button">
        Save
      </button>
    </div>
  ) : (
    <li>
      <div className="my-div">
        <input type="checkbox" checked={isChecked} onChange={onClickChecbox} />
        <p className={`title ${textDeco}`}>{title}</p>
      </div>
      <div className="d-flex">
        <button onClick={onClickEditBtn} className="edit-button" type="button">
          Edit
        </button>
        <button onClick={onDelete} type="button">
          Delete
        </button>
      </div>
    </li>
  )
}
export default AddtodoItem
