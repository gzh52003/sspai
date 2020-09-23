
import React, { useState, useEffect, useCallback } from "react"
import "@/css/Content.scss"
import request from "@/utils/request"

function Content() {

    //  发起Ajax请求获取数据
    useEffect(() => {
        const getData = async () => {
            const { data } = await request.get('/recommend')
            changedata(data)
        }
        getData()
    }, [])

    //  初始化数据
    const [datas, changedata] = useState([])

    //  点击加载数据
    const addData = useCallback(() => {
        const getData = async () => {
            const { data } = await request.get('/recommend')
            datas.push(...data)
            changedata(datas)
            console.log(1111, datas,)

        }
        getData()
    }, [])

    return (
        <>
            { datas.map(item => {
                return (
                    <React.Fragment key={item._id}>
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
                            < div className='content-main'  >
                                <div className="header"  >
                                    <img src={item.banner} />
                                    {item.author ?
                                        <p  >
                                            <img src={item.author.avatar} />
                                            <span>{item.author.nickname}</span>
                                        </p>
                                        : ''
                                    }
                                    {item.corner && item.corner.icon ?
                                        <h2><img src={item.corner.icon} /></h2> : ''
                                    }
                                </div>
                                <div className="title"  >
                                    {item.title}
                                </div>
                            </div>


                        }
                    </React.Fragment>
                )

            })}
            <div className="content-more" onClick={addData}> 更多</div>
        </>
    )

}

export default Content