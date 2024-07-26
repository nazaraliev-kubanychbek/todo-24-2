import './style.css';
import Header from './components/Header/Header';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);

  useEffect(()=>{
    setList(data.filter(item => !item.deleted))
  },[data])
  return (
    <div >
      <Header />
      <TodoForm data={data} setData={setData} />
      <TodoList list={list}  />
    </div>
  );
}

export default App;
