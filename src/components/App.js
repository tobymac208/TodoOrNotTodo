import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import TodoList from './TodoList';
import TodoDetail from './TodoDetail';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<TodoList />} />

          <Route path="/todo/:id" element={<TodoDetail />} />
        </Routes>
        <Footer />
      </Router>
    </div >
  );
}

export default App;
