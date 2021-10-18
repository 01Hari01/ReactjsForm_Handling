import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Sidebar_Submenu from "./sidebarExamples/Sidebar_Submenu";
function App() {
  return (
    <div className="App">
        <Router>
            <Route path='/forms' component={Sidebar_Submenu}/>

        </Router>

    </div>
  );
}

export default App;
