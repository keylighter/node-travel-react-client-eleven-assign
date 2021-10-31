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

import AuthProvider from './context/AuthProvider';
import Offers from './component/Offers/Offers';
import Detail from './component/Detail/Detail';
import Home from './component/Home/Home';


function App() {
  return (
    <div >
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Header></Header>
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route exact path='/home'>
              <Header></Header>
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route path='/login'>
              <Header></Header>
              <Login></Login>
              <Footer></Footer>
            </Route>
            <Route path='/register'>
              <Header></Header>
              <Register></Register>
              <Footer></Footer>
            </Route>
            <Route path='/offers'>
              <Header></Header>
              <Offers></Offers>
              <Footer></Footer>
            </Route>
            <Route path='/offers/detail/:id'>
              <Header></Header>
              <Detail></Detail>
              <Footer></Footer>
            </Route>

            <Route path='*'>
              <Notfound></Notfound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
