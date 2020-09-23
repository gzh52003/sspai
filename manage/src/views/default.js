import React from 'react';
import { lazy, Suspense, useState, ConnectFunction } from 'react';
console.log(ConnectFunction)
import { HashRouter, BrowserRouter, Route, Redirect, Switch, Link, NavLink, withRouter } from 'react-router-dom';

const Login = lazy(() => import('../views/Login'));
const Forget = lazy(() => import('../views/forget'));
import Face from './face';


function Default() {

    useState()
    return (
        <>

            <Suspense fallback={<div>loading</div>}>
           { true ?   (<Switch>
                <Route path="/login" component={Login} />
                <Route path="/forget" component={Forget} />
                <Redirect from ="/" to = "/login"></Redirect>
                </Switch>) : <Face />}
            </Suspense>

        </>
    )
}
export default Default;