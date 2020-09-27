import React, { useEffect, useState, useContext, useCallback } from 'react'

import Header from '#/home/Header'           //  导航栏 
import request from '@/utils/request'
import { MyContext } from '@/store'
import { withUser } from '@/utils/hoc'
import '@/css/Article.scss'


function Article(props) {
    const { state, dispatch } = useContext(MyContext)
    const [data, changeData] = useState([])
    useEffect(() => {
        const { id } = props.match.params
        const getData = async () => {
            let path = state.path.slice(0, state.path.lastIndexOf('?') == -1 ? state.path.length : state.path.lastIndexOf('?'))
            const { data } = await request.get(`/${path}/${id}`)
            changeData(data[0])
        }
        getData()

    }, [])
    const like = useCallback(async function (data) {
        const dynamic = { _id: data._id, title: data.title, banner: data.banner, avatar: data.author.avatar, nickname: data.author.nickname }

        const { _id } = props.currentUser
        console.log("123", _id)
        await request.put(`/user/${_id}`, {
            dynamic
        })
    }, [])

    return (
        <div className="article">
            <Header />
            <header>
                <img src={data.banner} />
            </header>
            <div className="article-content">
                <h2>{data.title}</h2>
                <p>
                    <img src={data.author ? data.author.avatar : 'img/recommend/recommend_Wise-2.png'} />{data.author ? data.author.nickname : ''}
                </p>
                <h3>{data.summary}</h3>
                <img src={data.contentImg} />
                <h3>{data.content}</h3>
                <h4>© 本文著作权归作者所有，并授权少数派独家使用，未经少数派许可，不得转载使用。</h4>
                <button className="btn" onClick={like.bind(null, data)} >
                    <span className="iconfont icon-iconset0216"></span>
                    {data.comment_count}
                </button>
                <span className="iconfont icon-shoucang-"></span>
            </div>
        </div>
    )
}

export default withUser(Article)