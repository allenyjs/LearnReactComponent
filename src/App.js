//import logo from './logo.svg';
import { HashRouter, Route, Switch } from "react-router-dom";
import './App.css';
import MasterLayout from './Component/MasterLayout';
import MasterLayout2 from './Component/MasterLayout2';
import MasterLayout3 from './Component/MasterLayout3';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={MasterLayout} />
          <Route path="/second" component={MasterLayout2} />
          <Route path="/third/:id?/:type?" component={MasterLayout3}/>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
