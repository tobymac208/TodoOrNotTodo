import api from '../api/todos';
import React, { createContext, useContext, useState } from 'react';

const todoCRUDContext = createContext();

export function TodoCRUDContextProvider({ children }) {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState([]);

    const retrieveTodos = async () => {
        // fetching data from axios
        const response = await api.get("/todos");
        // move forward if there was data returned
        if (response.data) {
            setTodos(response.data);
        }
    };

    const removeTodoHandler = async (id) => {
        await api.delete(`/contacts/${id}`);
        const newTodoList = todos.filter((todo) => {
            return todo.id !== id;
        });

        setTodos(newTodoList);
    };

    const value = {
        todo,
        todos,
        retrieveTodos,
        removeTodoHandler
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