import React from 'react';
import { useLocation } from 'react-router-dom';

const TodoDetail = () => {
    const location = useLocation();
    const { id, item, status } = location.state.todo;

    return (
        <div>
        </div>
    )
}

export default TodoDetail
