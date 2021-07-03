import './App.css';
import React, {useState} from 'react'
import Form from './components/Form'
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("")
  return (
    <div className="App">
      <header><h1>Hello react</h1></header>
      <Form setInputText={setInputText} />
      <TodoList inputText={inputText} />
    </div>
  );
}

export default App;
