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
            ...data
        ]);
        setText('');
        setStatus('all');
    }
    return (
        <div className="todo-form">
            <input type="text" className="todo-form-input"
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
