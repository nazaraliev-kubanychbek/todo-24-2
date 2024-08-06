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
        }}><i className="fa-solid fa-trash" /></button>
       : <>
            <button onClick={()=>{
              setKey(item.id, "correct")
            }}><i className="fa-solid fa-pen-to-square" /></button>
            <button
              onClick={() => {
                setKey(item.id, "important");
              }}
            >
              {
                item.important
                ?  <i className="fa-solid fa-star" />
                : <i className="fa-regular fa-star" />
              }

            </button>
          </>
        }

        <button
          onClick={() => {
            setKey(item.id, "deleted");
          }}
        >
          {
          status === "deleted"
           ? <i className="fa-solid fa-trash-can-arrow-up" />
           : <i className="fa-solid fa-trash" />
           }

        </button>
      </div>
    </div>
  );
};

export default TodoItem;
