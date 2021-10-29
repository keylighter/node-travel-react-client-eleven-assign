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
import Notfound from './component/Notfound/Notfound';
import Login from './component/Login/Login';
import Register from './component/Register/Register';


function App() {
  return (
    <div >

      <Router>
        <Switch>
          <Route exact path='/'>
            <Header></Header>
            <Footer></Footer>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>


          <Route path='*'>
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
