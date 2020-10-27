import React from 'react';
import TodoForm from "../TodoForm/TodoForm";
import "./App.css"

function App() {
    return <div className="todo-app">
    <h1 className="heading">What's the Plan for Today?</h1>
    <TodoForm />
    </div>
}

export default App;