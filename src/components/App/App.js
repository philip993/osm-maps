import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import NMap from '../Map/Map';
import Search from '../Search/Search';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={NMap} />
        <Route exact path="/routing" component={Search} />
      </Switch>
    </div>
  );
};

export default App;
