import React , { useState }  from "react";
import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Login from "./Login"
import reactDom from "react-dom";
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">

      {!user ? (
        <h1><Login /></h1>
      ) : (
        <div className="app__body">
        <Router>
          <Sidebar/>
          <Routes>
            <Route path="/rooms/:roomId" element={<Chat/>} />
            {/* <Route path="/" element={<Sidebar/>} /> */}
          </Routes>
        </Router>
      </div>
      )}
    </div>
  );
}

export default App;
