import React from 'react';
import FruitPage from './Components/FruitPage/FruitPage.jsx';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Banner from './Components/Banner/Banner.jsx';
import './App.css';

const App = () => {
  return(
    <div>
      <Router>
        <Banner />
        <Switch>
          <Route path="/" exact>
            <FruitPage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;