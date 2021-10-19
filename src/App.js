import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom";
import StatorAPI from "./API/StatorAPI";
function App() {
  return (
    <div className="App">
        <Router>
            <Route path='/forms' component={StatorAPI}/>

        </Router>

    </div>
  );
}

export default App;
