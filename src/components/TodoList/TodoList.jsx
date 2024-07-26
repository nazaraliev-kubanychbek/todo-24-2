import TodoItem from './../TodoItem/TodoItem';
import './todoList.css';
import FilterButtons from '../FilterButtons/FilterButtons';

const TodoList = ({list, data, setData, status, setStatus}) => {
    const setKey = (id, key) =>{
        setData(data.map(item =>{
            if(item.id === id){
                return {
                    ...item,
                    [key]: !item[key]
                }
            } else{
                return item
            }
        }))
    }
    return (
        <div className='todo-list'>
            <FilterButtons setStatus={setStatus} status={status} />
                {
                    list.map(item =>{
                        return <TodoItem setKey={setKey} key={item.id} item={item} />
                    })
                }
        </div>
    );
}

export default TodoList;
