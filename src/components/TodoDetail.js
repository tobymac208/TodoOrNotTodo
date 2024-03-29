import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const TodoDetail = () => {
    const location = useLocation();
    const { item, status } = location.state.todo;

    return (
        <div className="main">
            <div className="ui card centered">
                <div className="content">
                    <div className="header">{item}</div>
                    <div className="description">Status: {status}</div>
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

export default TodoDetail;
