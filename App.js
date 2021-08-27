import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Payment from './components/Payment'
import Home from './components/Home';
import Checkout from './components/Checkout';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/Login';
import { UseStateValue } from './components/StateProvider';
import { auth } from './components/firebase';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promis = loadStripe('pk_test_51JSRHTEyuCPTvkFeZTwCYoxGKw7hkDoG3oNCcDjL1sWE4V3WjUr9B5N0y9o0hjPLQz1QNN4aQo374Wz70eldgrSL00F1edWVES');

function App() {

    const [{ }, dispatch] = UseStateValue();

    useEffect(() => {
        auth.onAuthStateChanged(authUser => {

            if (authUser) {
                // the user logged in
                dispatch({
                    type: 'SET_USER',
                    user: authUser,
                })
            }
            else {
                // the user logged out 
                dispatch({
                    type: 'SET_USER',
                    user: null,
                })
            }
        })
    }, [])

    return (
        <Router>
            <div className='app'>

                <Switch>
                    <Route exect path="/login">
                        <Login />
                    </Route>
                    <Route exect path="/Checkout">
                        <Header />
                        <Checkout />
                    </Route>
                    <Route exect path="/payment">
                        <Header />
                        <Elements stripe={promis}>
                            <Payment />
                        </Elements>
                    </Route>
                    <Route exect path="/">
                        <Header />
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;