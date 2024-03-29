import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTodoCRUD } from '../context/TodoCRUDContextProvider';
import TodoCard from './TodoCard';
import { v4 as uuid } from 'uuid';

const TodoList = () => {
    const { todos, retrieveTodos, addTodoHandler } = useTodoCRUD();

    useEffect(() => {
        retrieveTodos();
    }, [])

    /** For each todo item, print out a div with the information. */
    const renderTodoList = (todos).map((todo) => {
        return (
            <TodoCard todo={todo} key={todo.id} />
        );
    });

    const addTestSampleTodo = () => {
        const newObj = { "id": uuid(), "item": "sample", "status":"sample"};
        addTodoHandler(newObj);
    };

    return (
        <div className='main'>
            <h2>
                Todo List
                <Link to="/add">
                    <button className='ui button blue right'>
                        Add Another
                    </button>
                </Link>
            </h2>
            <div className='ui celled list'>
                {renderTodoList}
            </div>
        </div>
    );
};

export default TodoList;
