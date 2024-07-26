import './style.css';
import Header from './components/Header/Header';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const [status, setStatus] = useState('all');

  useEffect(()=>{


    switch(status){
      case 'all':{
        setList(data.filter(item => !item.deleted))
        break
      }
      case 'active':{
        setList(data.filter(item => !item.deleted && !item.completed))
        break
      }
      case 'completed':{
        setList(data.filter(item => !item.deleted && item.completed))
        break
      }
      case 'important':{
        setList(data.filter(item => !item.deleted && item.important))
        break
      }
      default :{
        setList(data.filter(item => item.deleted))

      }
    }

  },[data, status])
  return (
    <div >
      <Header />
      <TodoForm data={data} setData={setData} />
      <TodoList
      status={status}
      setStatus={setStatus}
      list={list}
      data={data}
      setData={setData}
      />
    </div>
  );
}

export default App;
