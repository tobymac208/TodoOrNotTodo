import React from 'react';
import { useLocation } from 'react-router-dom';

const TodoDetail = () => {
    const location = useLocation();
    const { id, item, status } = location.state.todo;

    return (
        <div className="main">
            <div className="ui card centered">
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">Email: {email}</div>
                    <div className="description">Phone #: {number}</div>
                </div>
            </div>
            <div className="center-div">
                <Link to="/">
                    <button className="ui button blue center">
                        Back to Contact List
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default TodoDetail
