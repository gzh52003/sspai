
import React, { useState } from "react"
import "@/css/Content.scss"


const datas = [{
    "id": 62766,
    "title": "爸妈一定要装「管家」才安心？我会推荐这一款：Wise Care 365",
    "banner": "img/recommend/recommend_Wise-1.png",
    "summary": "多次尝试让爸妈远离披着羊皮的「某某卫士」无果？或许你真的该试试 Wise Care 365 了。",
    "content": "某某卫士、某某管家一般都是爸妈电脑里的「常客」，原因很简单 —— 对于并不太懂电脑的长辈而言，我们不在身边的时候，这些一站式、傻瓜化、全托管式的「系统优化」工具，或许才能给他们一丝心理安慰。",
    "contentImg": "img/recommend/recommend_Wise-3.png",
    "comment_count": 7,
    "like_count": 7,
    "view_count": 0,
    "free": true,
    "post_type": 2,
    "important": 1,
    "released_time": 1600408695,
    "morning_paper_title": [],
    "advertisement_url": "",
    "series": [],
    "author": {
        "id": 0,
        "slug": "h1a5rexw",
        "avatar": "img/recommend/recommend_Wise-2.png",
        "nickname": "少数派正版软件"
    },
    "corner": {
        "id": 11,
        "name": "Tron计划",
        "url": "",
        "icon": "https://cdn.sspai.com/2020/05/29/c7d11f7ada96a747936a4f74d2ec07f0.png",
        "memo": "Tron计划",
        "color": ""
    },
    "special_columns": [],
    "status": 0,
    "created_time": 1600324297,
    "modify_time": 1600421439,
    "is_matrix": false,
    "is_recommend_to_home": true
},
{
    "id": 62778,
    "title": "科普 | Apple Watch Series 6 的血氧监测有什么用？",
    "banner": "img/recommend/recommend_Apple Watch-1.jpg",
    "summary": "Apple Watch 的健康特性，一直是苹果重点打造和宣传的亮点。",
    "content": "。从心率监测到心电图（简称 ECG，大陆未开放），从摔倒检测到环境音量测量，每一代 Apple Watch 都在不断增加健康相关的特性。最近发布的 watchOS 7 和 Apple Watch Series 6，则带来了睡眠监测与血氧监测两大健康新功能。一般来说，一个血红蛋白可以搭乘四个氧分子，这时候，「满载」的血红蛋白被称为氧饱和血红蛋白。那么，Apple Watch 的血氧监测，测量的其实是一个百分比，即血氧饱和度，就是氧饱和血红蛋白在所有血红蛋白中的占比。正常人的血氧饱和度在 95%–100% 之间，如果低于这个值，往往说明外部环境氧气不足，或者用户本身的健康出了问题。特别是当氧饱和度低于 90%，就值得引起重视了。",
    "contentImg": "img/recommend/recommend_Apple Watch-3.png",
    "comment_count": 12,
    "like_count": 20,
    "view_count": 0,
    "free": true,
    "post_type": 1,
    "important": 1,
    "released_time": 1600398618,
    "morning_paper_title": [],
    "advertisement_url": "",
    "series": [],
    "author": {
        "id": 0,
        "slug": "hpx14j8g",
        "avatar": "img/recommend/recommend_Apple Watch-2.jpg",
        "nickname": "子不语Rex"
    },
    "corner": {
        "id": 0,
        "name": "",
        "url": "",
        "icon": "",
        "memo": "",
        "color": ""
    },
    "special_columns": [],
    "status": 0,
    "created_time": 1600363225,
    "modify_time": 1600421436,
    "is_matrix": false,
    "is_recommend_to_home": true
}]


function Content() {
    console.log(111, datas)
    const [data, changedata] = useState(datas)
    console.log(222, data)
    return (
        <div className='content-main'>
            <div className="header">
                <img src={data[0].banner} />
                <p>
                    <img src={data[0].author.avatar} />
                    <span>{data[0].author.nickname}</span>
                </p>
                <h2>
                    <img src={data[0].corner.icon} />
                </h2>
            </div>
        </div>
    )
}

export default Content