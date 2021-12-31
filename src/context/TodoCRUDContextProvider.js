import api from '../api/todos';
import React, { createContext, useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';

const todoCRUDContext = createContext();

export function TodoCRUDContextProvider({ children }) {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState([]);

    const addTodoHandler = async (todo) => {
        const request = {
            id: uuid(),
            ...todo,
        };
        const response = await api.post('/todos', request);
        setTodos([...todos, response.data]);
    };

    const retrieveTodos = async () => {
        // fetching data from axios
        const response = await api.get("/todos");
        // move forward if there was data returned
        if (response.data) {
            setTodos(response.data);
        }
    };

    const updateTodoHandler = async (todo) => {
        const response = await api.put(`/todos/${todo.id}`, todo);
        const { id } = response.data;
        setTodos(
            todos.map((todo) => {
                return todo.id === id ? { ...response.data } : todo;
            })
        );
    };

    const removeTodoHandler = async (id) => {
        await api.delete(`/todos/${id}`);
        const newTodoList = todos.filter((todo) => {
            return todo.id !== id;
        });

        setTodos(newTodoList);
    };

    const value = {
        todo,
        todos,
        retrieveTodos,
        removeTodoHandler,
        addTodoHandler,
        updateTodoHandler
    }

    return (
        <todoCRUDContext.Provider value={value}>
            {children}
        </todoCRUDContext.Provider>
    );
}


export function useTodoCRUD() {
    return useContext(todoCRUDContext);
}