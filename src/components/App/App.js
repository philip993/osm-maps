import { Route, Switch } from 'react-router-dom';
import About from '../About/About';
import Header from '../Header/Header';
import NMap from '../Map/Map';
import './App.css';
import POI from '../POI/POI';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={NMap} />
        <Route exact path="/about" component={About} />
        <Route exact path="/pois" component={POI} />
      </Switch>
    </div>
  );
};

export default App;
