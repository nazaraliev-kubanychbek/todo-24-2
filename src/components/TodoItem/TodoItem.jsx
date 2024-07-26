import './todoItem.css';

const TodoItem = ({ item, setKey }) => {
  return (
    <div className={item.important ? "todo-item todo-item-important" : "todo-item"}>

      <div className="todo-item-left">
        <input type="checkbox"
        checked={item.completed}
        onChange={e =>{
            setKey(item.id, 'completed')
        }}
        />
        <p>{item.text}</p>
      </div>

      <div className="todo-item-right">
        <button>edit</button>
        <button onClick={()=>{
            setKey(item.id, 'important')
        }}>important</button>
        <button onClick={()=>{
            setKey(item.id, 'deleted')
        }}>delete</button>
      </div>

    </div>
  );
};

export default TodoItem;
