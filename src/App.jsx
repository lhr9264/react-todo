import { useState, useEffect } from 'react';
import styles from './App.module.css';
import TodoCount from './components/TodoCount.jsx';
import TodoAdd from './components/TodoAdd.jsx';
import TodoList from './components/TodoList.jsx';

const data = [
  { id: 0, text: '리액트 공부하기', done: false },
  { id: 1, text: '리액트 공부하기2', done: false },
  { id: 2, text: '리액트 공부하기3', done: false },
];

export default function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className={styles.app}>
      <h1>Todo List</h1>
      <TodoCount todos={todos} />
      <TodoAdd todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
