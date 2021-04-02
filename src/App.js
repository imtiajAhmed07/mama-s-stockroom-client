import './App.css';
import Header from './components/Header/Header';
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import Home from './components/Home/Home';
import { createContext, useState } from 'react';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Checkout from './components/Checkout/Checkout';
import Orders from './components/Orders/Orders';
import AddProducts from './components/AddProducts/AddProducts';
import ManageProduct from './components/ManageProduct/ManageProduct';

export const UserContext = createContext()

function App() {
  
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/orders">
            <Orders></Orders>
          </PrivateRoute>
          <Route exact path="/admin">
            <Admin></Admin>
          </Route>
          <PrivateRoute path="/checkout/:id">
            <Checkout></Checkout>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
