import './App.css';
import React, {useState} from 'react'
import Form from './components/Form'
import TodoList from './components/TodoList';

export default function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])

  return (
    <div className="App">
      <header><h1>Hello react</h1></header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
      <TodoList />
    </div>
  );
}
