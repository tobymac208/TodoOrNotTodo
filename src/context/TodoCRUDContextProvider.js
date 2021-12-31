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

    const value = {
        todo,
        todos,
        retrieveTodos
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