import { Route, Switch } from 'react-router-dom';
import About from '../About/About';
import Header from '../Header/Header';
import NMap from '../Map/Map';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={NMap} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  );
};

export default App;
