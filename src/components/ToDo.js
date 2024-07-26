import React, { useState, useEffect } from 'react';

const ToDo = ({ toggleToDo }) => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(savedTodos);
    }, []);

    const addTodo = (todo) => {
        const newTodos = [...todos, { text: todo, critical: false }];
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    };

    const completeTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    };

    const updateTodo = (index) => {
        const updatedText = prompt('Update the task:', todos[index].text);
        if (updatedText !== null && updatedText.trim() !== '') {
            const newTodos = todos.map((todo, i) => 
                i === index ? { ...todo, text: updatedText } : todo
            );
            setTodos(newTodos);
            localStorage.setItem('todos', JSON.stringify(newTodos));
        }
    };

    const toggleCritical = (index) => {
        const newTodos = todos.map((todo, i) => 
            i === index ? { ...todo, critical: !todo.critical } : todo
        );
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    };

    return (
        <div className="form-modal">
            <div className="form-modal-content">
                <div className='d-flex justify-content-end'>
                    <button className='btn btn-danger close'><span onClick={toggleToDo}>&times;</span></button>
                </div>
                <div className='container mt-2'>
                    <h2 className='mx-3'>To-Do List</h2>
                    <hr />
                    <TodoForm addTodo={addTodo} />
                    <TodoList 
                        todos={todos} 
                        completeTodo={completeTodo} 
                        updateTodo={updateTodo} 
                        toggleCritical={toggleCritical} 
                    />
                </div>
            </div>
        </div>
    );
};

const TodoForm = ({ addTodo }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(input);
        setInput('');
    };

    return (
        <form className='container' onSubmit={handleSubmit}>
            <label className='form-label'>Add New Task: </label>
            <div className='row'>
                <div className='col-md-10 mt-1'>
                    <input
                        type="text"
                        value={input}
                        className='form-control'
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>
                <div className='col-md-2 d-flex justify-content-end'>
                    <button type="submit" className='btn btn-outline-success mt-2'>Add</button>
                </div>
            </div>
        </form>
    );
};

const TodoList = ({ todos, completeTodo, updateTodo, toggleCritical }) => (
    <div className="table-responsive mt-4">
        <table className="table">
            <thead>
                <tr>
                    <th className='w-50'><h4>Task List</h4></th>
                    <th></th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
                {todos.map((todo, index) => (
                    <tr key={index} className={todo.critical ? 'table-danger' : ''}>
                        <td><p className='p-3'>{todo.text}</p></td>
                        <td>
                            <button className='btn btn-success mx-2 mt-2' onClick={() => completeTodo(index)}>Complete</button>
                            <button className='btn btn-info mx-2 mt-2' onClick={() => updateTodo(index)}>Update</button>
                            <div className="form-check mt-2 mx-2">
                                <input 
                                    className="form-check-input" 
                                    type="checkbox" 
                                    checked={todo.critical}
                                    onChange={() => toggleCritical(index)} 
                                    id={`flexCheckCritical${index}`} 
                                />
                                <label className="form-check-label" htmlFor={`flexCheckCritical${index}`}>
                                    Mark Critical
                                </label>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default ToDo;
