import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useTodoCRUD } from '../context/TodoCRUDContextProvider';

const Delete = () => {
    const location = useLocation();
    const navigate = useNavigate();
    // loads in state data
    const { id, item, status } = location.state.todo;
    const { removeTodoHandler } = useTodoCRUD();

    const removeTodo = (id) => {
        removeTodoHandler(id);
    };

    const returnToHome = () => {
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
            <form className='ui form'>
                <div className='field'>
                    <button onClick={ removeTodo(id) }>Yes</button>
                </div>
                <div className='field'>
                    <button onClick={( returnToHome() )}>No</button>
                </div>
            </form>
        </div>
    )
}

export default Delete;
