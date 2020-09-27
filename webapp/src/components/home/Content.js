
import React, { useState, useEffect, useCallback, useContext } from "react"
import { withRouter } from 'react-router-dom'

import Card from '#/home/Card'
import { MyContext } from "@/store"
import "@/css/Content.scss"
import request from "@/utils/request"

function Content(props) {
    const { state, dispatch } = useContext(MyContext)

    //  初始化数据
    const [data, changedata] = useState([])

    //  发起Ajax请求获取数据
    useEffect(() => {
        const getData = async () => {
            const { data } = await request.get(`/${state.path}`)
            changedata(data)
        }
        getData()
    }, [state.path])

    //  点击加载数据
    const addData = useCallback(() => {
        const getData = async () => {
            const { data } = await request.get(`/${state.path}`)
            data.push(...data)
            changedata(data)

        }
        getData()
    }, [data])

    return (
        <>
            { data.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        { item.corner && item.corner.name === "派早报" ?
                            <div className="content-paper" >
                                <header>
                                    <h2>派早报</h2>
                                    <h3>
                                        <p> 二〇二〇年九月十八日</p>
                                        <span>星期五</span>
                                    </h3>
                                </header>
                                {
                                    item.morning_paper_title.map((item, index) => {
                                        return (
                                            <p key={index}><span>{"0" + (index + 1)}</span>{item}</p>
                                        )
                                    })
                                }
                                <button>阅读全篇</button>
                            </div>
                            :
                            <Card data={item}></Card>
                        }
                    </React.Fragment>
                )

            })}
            <div className="content-more" onClick={addData}> 更多</div>
        </>
    )
}

Content = withRouter(Content)
export default Content