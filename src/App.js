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

import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Booking from './component/Booking/Booking';
import AddNewOffer from './component/AddNewOffer/AddNewOffer';


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
            <PrivateRoute path='/detail/:offerId'>
              <Header></Header>
              <Detail></Detail>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute path='/booking'>
              <Header></Header>
              <Booking></Booking>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute path='/addoffer'>
              <Header></Header>
              <AddNewOffer></AddNewOffer>
              <Footer></Footer>
            </PrivateRoute>

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
