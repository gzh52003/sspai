import React from 'react';
import { Redirect } from 'react-router-dom';

export function withAuth(InnerComponent){
    return class OuterComponent extends InnerComponent{
        componentDidMount(){
            super.componentDidMount();
        }
        render(){
            if (this.props.currentUser.username) {
                return super.render()
            }
            return <Redirect to="/login" />            
        }
    }
}
export function withUser(InnerComponent){
    return class OuterComponent extends React.Component{
        render(){
            let  currentUser = localStorage.getItem('currentUser');
            try {
                currentUser = JSON.parse(currentUser)
            }catch(err){
                currentUser = currentUser;
            }
            if(!currentUser){
                currentUser = {}
            }
            return (
                <InnerComponent {...this.props} currentUser={currentUser} />
            )
        }
    }
}
export function withStorage(key){
    const value = localStorage.getItem(key);
    const data = {
        [key] : value
    }
    return function (InnerComponent){
        return function OuterComponent(props){
            return <InnerComponent {...props} {...data}></InnerComponent>
        }
    }
}
export function withUserFn(){
    const user = localStorage.getItem("currentUser") || {};
    if (user !== {}){
        return function (InnerComponent){
            return function OuterComponent(props){
                return <InnerComponent {...props} {...user}></InnerComponent>
            }
        }
    }
}
export default {
    withAuth,
    withUser,
    withStorage,
    withUserFn
}