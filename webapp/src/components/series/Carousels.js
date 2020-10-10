import React, { useState, useEffect } from 'react'
import { Carousel } from 'antd-mobile';

import "@/css/Carousel_newest.scss"

function Swiper() {
    const initData = ['100000014.jpg','100000015.jpg','100000016.jpg','100000017.png','100000018.jpg']
    let [data, changeData] = useState(initData)
    return (
        <div className="carousels">
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
                        key={val}
                        href="*"
                        style={{
                            display: 'inline-block', width: '153px', height: "200px", boxShadow: " 0 4px 4px rgba(0,0,0,.15)", borderRadius: "6px"
                        }}
                    >
                        <img
                            src={`img/series/${val}`}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top', touchAction: "none", borderRadius: "6px" }}
                        />
                        <div></div>
                    </a>
                ))}
            </Carousel>
        </div>
    )
}

export default Swiper