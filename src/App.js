import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  document.title = 'Roster'
  return (
    <div className='todo-app'>
      <TodoList />
    </div>
  );
}

export default App;