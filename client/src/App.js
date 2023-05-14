
import './App.css';
import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Index from './components/Index';
import Form from './components/Form';
import OneAuthor from './components/OneAuthor';
import Update from './components/Update';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/authors" element={<Dashboard/>}/>
        <Route path="/authors/new" element={<Form/>}/>
        <Route path="/authors/:id" element={<OneAuthor/>}/>
        <Route path="/authors/:id/edit" element={<Update/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
