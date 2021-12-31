import React from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useTodoCRUD } from '../context/TodoCRUDContextProvider';

const Delete = () => {
    const location = useLocation();
    const navigate = useNavigate();
    // loads in state data
    const { id, item, status } = location.state.todo;
    const { removeTodoHandler } = useTodoCRUD();
    
    const removeTodo = () => {
        removeTodoHandler(id);
        goHome();
    };

    const goHome = () => {
        navigate("/");
    };

    return (
        <div className='ui main'>
            <h2>Are you sure you want to delete this todo item?</h2>
            <div className="ui card centered">
                <div className="content">
                    <div className="header">{item}</div>
                    <div className="description">Status: {status}</div>
                </div>
            </div>
            <div className='ui three item menu'>
                <button className='ui button primary' onClick={removeTodo}>Yes</button>
                <button className='ui button primary' onClick={goHome}>No</button>
            </div>
        </div>
    );
};

export default Delete;
