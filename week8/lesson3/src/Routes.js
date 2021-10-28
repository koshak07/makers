import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainContextProvider from './contexts/MainContext';
import AddPage from './pages/AddPage';
import MainPage from './pages/MainPage';

const Routes = () => {
    return (
        <MainContextProvider>

        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route exact path="/add" component={AddPage}/>
                <Redirect to="/"/>
            </Switch>
        </BrowserRouter>
        </MainContextProvider>
    );
};

export default Routes;