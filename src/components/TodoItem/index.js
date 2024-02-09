import './index.css'
const AddtodoItem = props => {
  const {todoItem, deleteItem} = props
  const {id, title} = todoItem
  const onDelete = () => {
    deleteItem(id)
  }
  return (
    <li>
      <p>{title}</p>
      <button onClick={onDelete}>Delete</button>
    </li>
  )
}
export default AddtodoItem
