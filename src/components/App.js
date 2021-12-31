import React from 'react';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import TodoList from './TodoList';
import TodoDetail from './TodoDetail';
import { TodoCRUDContextProvider } from '../context/TodoCRUDContextProvider';
import AddTodo from './AddTodo';
import EditTodo from './EditTodo';
import Delete from './Delete';

function App() {
  return (
    <div className='ui container'>
      <Router>
        <Header />
        <TodoCRUDContextProvider>
          <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="/add" element={<AddTodo />} />
            <Route path="/edit" element={<EditTodo />} />
            <Route path="/todo/:id" element={<TodoDetail />} />
            <Route path="/delete" element={<Delete />} />
          </Routes>
        </TodoCRUDContextProvider>
        <Footer />
      </Router>
    </div >
  );
}

export default App;
