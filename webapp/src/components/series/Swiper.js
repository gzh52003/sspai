import React,{useState} from 'react'
import {Carousel} from 'antd-mobile'
import '@/css/Swiper.scss'

function Swiper() {
    const initData = ['banner_5.jpg', 'banner_6.jpg', 'banner_7.jpg', 'banner_8.jpg']
    let [data, changeData] = useState(initData)
    return (
        <div className="swiper">
            <Carousel
                autoplay
                infinite
                dotStyle={{ marginLeft: "10px", width: "6px", height: "6px", backgroundColor: "#fff", opacity: .48 }}
                dotActiveStyle={{ marginLeft: "10px", width: "6px", height: "6px", backgroundColor: "#fff" }}
            >
                {data.map(val => (
                    <a
                        key={val}
                        href="*"
                        style={{ display: 'inline-block', width: '100%', height: "158px" }}
                    >
                        <img
                            src={`img/banner/${val}`}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top', touchAction: "none" }}
                        />
                    </a>
                ))}
            </Carousel>
        </div>
    )
}

export default Swiper