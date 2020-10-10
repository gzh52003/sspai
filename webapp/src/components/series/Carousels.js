import React, { useState, useEffect, useCallback } from 'react'
import { Carousel } from 'antd-mobile';

import "@/css/Carousel_newest.scss"
import request from '@/utils/request'

function Swiper(props) {
    const datas = props.data
    // const type = datas.id.split('/')[1]

    const initData = ['100000014.jpg','100000015.jpg','100000016.jpg','100000017.png','100000018.jpg']
    let [data, changeData] = useState(initData)
    
    // 初始化数据
    const [state,changedata] = useState([])
    console.log("111=",state)

    // 发送ajax请求数据
    useEffect(() => {
        const getData = async () => {
            const {data} = await request.get("/newest")
            changedata(data)
        }
        getData()
    }, [])

    // 点击加载数据
    useCallback(() => {
        const getData = async () => {
            const {data} = await request.get("/newest")
            data.push(...data)
            changedata(data)
        }
        getData()
    },[data])

    console.log(data)

    return (
        <div className="carousels" >
            <Carousel
                className="space-carousel"
                infinite
                dots={false}
                cellSpacing={10}
                slideWidth={0.38}
                style={{ paddingTop: "10px", paddingBottom: "20px" }}
            >
                {data.map(val => (
                    <a  
                    // onClick={() => { props.history.push(`/article/${data._id}?${type}`) }} 
                        key={val}
                        
                        style={{
                            display: 'inline-block', width: '153px', height: "200px", boxShadow: " 0 4px 4px rgba(0,0,0,.15)", borderRadius: "6px"
                        }}
                    >
                        <img
                            src={`img/series/${val}`}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top', touchAction: "none", borderRadius: "6px" }}
                        />
                        <div>￥20.00</div>
                    </a>
                ))}
            </Carousel>
        </div>
    )
}

export default Swiper