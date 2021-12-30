import React, { createContext, useContext, useState } from 'react';

export function TodoCRUDContextProvider({ children }) {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState([]);

    return (
        <div>

        </div>
    )
}

export function useTodoCRUD() {
    return useContext(todoCRUDContext);
}