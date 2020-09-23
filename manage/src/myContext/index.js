import React from 'react';
const publicData ={
 user:[    {userName:'ROOT'},
    {passWord:'ROOT'}]
}
const MyContext = React.createContext({publicData});
export default MyContext;