import React, { useContext,useEffect } from 'react';
import { lazy, Suspense, useState, useReducer ,useCallback} from 'react';
import { HashRouter, BrowserRouter, Route, Redirect, Switch, Link, NavLink, withRouter } from 'react-router-dom';

const Login = lazy(() => import('../views/Login'));
const Forget = lazy(() => import('../views/forget'));
import Face from './face';
import {getActiveData} from '../utils/tool';
import {MyContext, Provider} from '../myContext';
import store from '../store'

function Default() {
    let bool=true ;
    try {
      let data =  localStorage.getItem('login');
      let a = localStorage.getItem('currentUser');
      a = JSON.parse(a);
      data = JSON.parse(data)
      
      if(data.code ==="zqm"){
          bool = false
      }
      if(a.authorization){
          bool = false
      }else{
          bool = true
      }
    }catch(err){
      
    }
      
    return (
        
        <>
           
            <Suspense fallback={<div>loading</div>}>
           { bool ?   (<Switch>
                <Route path="/login" component={Login} />
                <Route path="/forget" component={Forget} />
                <Redirect from ="/" to = "/login"></Redirect>
                </Switch>) :<Provider><Face /> </Provider>}
            </Suspense>
            
            
        </>
    )
}
export default Default;