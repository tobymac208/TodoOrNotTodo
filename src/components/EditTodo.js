import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTodoCRUD } from '../context/TodoCRUDContextProvider';

const EditTodo = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { id, item, status } = location.state.todo;
    const [newItem, setNewItem] = useState(item);
    const [newStatus, setNewStatus] = useState(status);
    const { updateTodoHandler } = useTodoCRUD();

    const update = (e) => {
        e.preventDefault();
        if (newItem == "" || newStatus == "") {
            alert("item and status are empty :(");
            return;
        }
        updateTodoHandler({ id, item: newItem, status: newStatus });
        setNewItem("");
        setNewStatus("");
        navigate("/");
    }

    return (
        <div className='ui main'>
            <h2>Update Todo</h2>
            <form className='ui form' onSubmit={update}>
                <div className="field">
                    <label>Item</label>
                    <input
                        type="text"
                        name="item"
                        placeholder="Item"
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label>Status</label>
                    <input
                        type="text"
                        name="status"
                        placeholder="Status"
                        value={newStatus}
                        onChange={(e) => setNewStatus(e.target.value)}
                    />
                </div>
                <button className="ui button blue">Update</button>

            </form>
        </div>
    );
};

export default EditTodo;
