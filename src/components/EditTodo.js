import React from 'react';
import { useTodoCRUD } from '../context/TodoCRUDContextProvider';

const EditTodo = () => {
    const { id, item, status } = useTodoCRUD();

    setNewItem("");
    setNewStatus("");

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
                        onChange={(e) => setStatus(e.target.value)}
                    />
                </div>
                <button className="ui button blue">Update</button>

            </form>
        </div>
    );
};

export default EditTodo;
