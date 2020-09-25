import React from 'react'

import Header from '#/home/Header'           //  导航栏
import { withUser } from '@/utils/hoc'
import "@/css/Mine.scss"



function Mine(props) {
    const userData = props.currentUser
    return (
        <div className='mine'>
            <Header></Header>
            <header>
                <h2>
                    <img src={userData.toppic} />
                    <span>编辑</span>
                </h2>
                <h3>
                    <span>{userData.username}</span>
                    {/* <p>{userData.message == [] ? "1" : "2"}</p> */}
                </h3>


            </header>
        </div>
    )
}



export default withUser(Mine)