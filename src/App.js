import Land from './components/jsx/land.jsx';
import Home from './components/jsx/home.jsx';
import Project from './components/jsx/Projects';
import Curricular from './components/jsx/Curr';
import Scroll from './components/jsx/scroll';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Scroll />
          <Switch>
            <Route path="/" exact component={Land} />
            <Route path="/home" component={Home} />
            <Route path="/project" component={Project} />
            <Route path="/curr" component={Curricular} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
