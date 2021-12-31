import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTodoCRUD } from '../context/TodoCRUDContextProvider';
import user from '../images/item.png';

const TodoCard = (props) => {
    const { id, item, status } = props.todo;
    const navigate = useNavigate();
    const { removeTodoHandler } = useTodoCRUD();

    const deleteTodo = (id) => {
        /** sends user to delete page */
        navigate("/delete");
        // removeTodoHandler(id);
    };

    return (
        <div className='item'>
            <img
                className='ui avatar image'
                src={user}
                alt="todo item"
            />
            <div className='content'>
                <Link
                    to={`/todo/${id}`}
                    state={{ todo: props.todo }}>
                    <div className='header'>{item}</div>
                    <div>{status}</div>
                </Link>
            </div>
            <i
                className='trash alternate outline icon'
                style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
                onClick={() => deleteTodo(id)}
            ></i>
            <Link
                to="/edit"
                state={{ todo: props.todo }}>
                <i
                    className='edit alternate outline icon'
                    style={{ color: "blue", marginTop: "7px" }}></i>
            </Link>
        </div>
    );
};

export default TodoCard
