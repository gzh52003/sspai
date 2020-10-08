import React from 'react'
import { withRouter } from 'react-router-dom'

function Card(props) {
    const data = props.data
    return (
        < div className='content-main' onClick={() => { props.history.push(`/article/${data._id}`) }} >
            <div className="header"  >
                <img src={data.banner} />
                {data.author ?
                    <p  >
                        <img src={data.author.avatar} />
                        <span>{data.author.nickname}</span>
                    </p>
                    : ''
                }
                {data.corner && data.corner.icon ?
                    <h2><img src={data.corner.icon} /></h2> : ''
                }
            </div>
            <div className="title"  >
                {data.title}
            </div>
        </div>
    )
}

export default withRouter(Card)