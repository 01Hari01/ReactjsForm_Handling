import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom";
import RandomPeopleAPI from "./components/randomPeopleAPI";
function App() {
  return (
    <div className="App">
        <Router>
            <Route exact='/' path='' component={RandomPeopleAPI}/>
        </Router>

    </div>
  );
}

export default App;
