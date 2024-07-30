import TodoItem from './../TodoItem/TodoItem';
import './todoList.css';
import FilterButtons from '../FilterButtons/FilterButtons';
import EditItem from '../EditItem/EditItem';

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

    const deleteItem = (id) =>{
        setData(data.filter(item =>{
            return item.id !== id
        }))
    }
    return (
        <div className='todo-list'>
            <FilterButtons setStatus={setStatus} status={status} />
                {
                    list.map(item =>{
                        if(item.correct) return <EditItem key={item.id} item={item} data={data} setData={setData} setKey={setKey} />

                        return <TodoItem deleteItem={deleteItem} status={status} setKey={setKey} key={item.id} item={item} />
                    })
                }
        </div>
    );
}

export default TodoList;
