import './App.css';
import Land from './components/jsx/land.jsx';
import Home from './home';
import Project from './Projects';
import Curr from './Curr';
import Nav from './components/jsx/navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
    <Nav/>
    <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/project" component={Project}/>
    <Route path="/curricular" component={Curr}/>
    </Switch>
    </div>
    </Router>
    
  );
}

export default App;
