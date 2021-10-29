import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';

function App() {
  return (
    <div >

      <Router>
        <Switch>
          <Route path='/'>
            <Header></Header>
            <Footer></Footer>
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
