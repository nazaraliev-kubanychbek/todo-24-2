import './form.css';
import { useState } from 'react';

const TodoForm = ({data, setData, setStatus, status}) => {
    const [text, setText] = useState('');

    const addTodo = () =>{
        setData([
            {
                text,
                completed: false,
                important: false,
                deleted: false,
                correct: false,
                id: data.length > 0
                ? data[0].id + 1
                : 1
            },
            ...data.map(item =>{
                return {
                    ...item,
                    correct: false
                }
            })
        ]);
        setText('');
        setStatus('all');
    }
    return (
        <div className="todo-form">
            <input type="text" className="todo-form-input"
            autoFocus={true}
            value={text}
            onChange={ e =>{
                setText(e.target.value)
            }}
            disabled={status === 'deleted'}
            />

{
    status === 'deleted'
    ? ""
    : <button className="todo-form-btn"
    onClick={()=>{
        addTodo()
    }}
    >add</button>
}

        </div>
    );
}

export default TodoForm;
