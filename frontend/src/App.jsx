import "./App.css";
import Profile from "./components/Profile/Profile";
import Login from "./Components/Login/Login";
import Register from "./components/Register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage";

function App() {
  const [userstate, setUserState] = useState({});
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Login setUserState={setUserState} />}
          ></Route>
          <Route path="/signup" element={<Register />}></Route>
          <Route path="/Home" element={<HomePage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
