import React, { useState, useEffect } from 'react'
import { Carousel } from 'antd-mobile';

import "@/css/Carousels.scss"

function Swiper() {
    const initData = ['card_1.png', 'card_2.jpg', 'card_3.png', 'card_4.jpg']
    let [data, changeData] = useState(initData)
    return (
        <div className="carousels">
            <Carousel
                className="space-carousel"
                infinite
                dots={false}
                cellSpacing={10}
                slideWidth={0.47}
                style={{ paddingTop: "10px", paddingBottom: "20px" }}
            >
                {data.map(val => (
                    <a
                        key={val}
                        href="*"
                        style={{
                            display: 'inline-block', width: '100%', height: "92px", boxShadow: " 0 4px 4px rgba(0,0,0,.15)", borderRadius: "6px"
                        }}
                    >
                        <img
                            src={`img/card/${val}`}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top', touchAction: "none", borderRadius: "6px" }}
                        />
                    </a>
                ))}
            </Carousel>
        </div>
    )
}

export default Swiper