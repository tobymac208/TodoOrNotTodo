import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTodoCRUD } from '../context/TodoCRUDContextProvider';

const AddTodo = () => {
    const [item, setItem] = useState("");
    const [status, setStatus] = useState("");

    const { todos, addTodoHandler } = useTodoCRUD();

    const add = (e) => {
        e.preventDefault();
        if (item === "" || status === "") {
            alert("You must enter data in all fields.");
            return;
        };
    };

    addTodoHandler({ item, status });
    setItem("");
    setStatus("");
    // takes the user back home
    useNavigate("/");

    return (
        <div className='ui main'>
            <h2>Add Todo</h2>
            <form className='ui form' onSubmit={add}>
                <div className='field'>
                    <label>Item</label>
                    <input
                        type="text"
                        id="item"
                        placeholder='Item'
                        value={item}
                        onChange={(e) => setItem(e.target.value)} />
                </div>
                <div className='field'>
                    <label>Item</label>
                    <input
                        type="text"
                        id="status"
                        placeholder='Status'
                        value={item}
                        onChange={(e) => setStatus(e.target.value)} />
                </div>
                <label for="status">Status</label>
                <input type="text" id="status" />

                <button className='ui button blue'>Add</button>
            </form>
        </div>
    );
};

export default AddTodo;
