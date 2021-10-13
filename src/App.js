import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom";
import formsExercise from "./components/formsExercise";
import PSBar from "./components/proSidebar";
function App() {
  return (
    <div className="App">
        <Router>
            <Route exact='/' path='' component={PSBar}/>
        </Router>

    </div>
  );
}

export default App;
