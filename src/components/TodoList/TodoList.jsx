

const TodoList = ({list}) => {
    return (
        <div>
                {
                    list.map(item =>{
                        return <p>{item.text}</p>
                    })
                }
        </div>
    );
}

export default TodoList;
