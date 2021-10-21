import './App.css';
import React from "react";
import {BrowserRouter as Router,Route} from "react-router-dom";
import LossesAPI from "./API/LossesAPI";
function App() {
  return (
    <div className="App">
        <Router>
            <Route path='/forms' component={LossesAPI}/>

        </Router>

    </div>
  );
}

export default App;
