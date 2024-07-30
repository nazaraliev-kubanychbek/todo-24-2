import "./todoItem.css";

const TodoItem = ({ item, setKey, status, deleteItem }) => {
  return (
    <div
      className={item.important ? "todo-item todo-item-important" : "todo-item"}
    >
      <div className="todo-item-left">
        <input
          type="checkbox"
          checked={item.completed}
          onChange={(e) => {
            setKey(item.id, "completed");
          }}
        />
        <p>{item.text}</p>
      </div>

      <div className="todo-item-right">
        {status === "deleted"
        ? <button onClick={()=>{
          deleteItem(item.id)
        }}>delete</button>
       : <>
            <button onClick={()=>{
              setKey(item.id, "correct")
            }}>edit</button>
            <button
              onClick={() => {
                setKey(item.id, "important");
              }}
            >
              important
            </button>
          </>
        }

        <button
          onClick={() => {
            setKey(item.id, "deleted");
          }}
        >
          {status === "deleted" ? "restore" : "delete"}
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
