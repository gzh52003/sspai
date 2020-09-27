import React from 'react'

function Footer() {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src='img/common/icon.png' />
            </div>
            <p>
                <span className="iconfont icon-weibo"></span>
                <span className="iconfont icon-weixin"></span>
                <span className="iconfont icon-tuite"></span>
                <span className="iconfont icon-WiFi"></span>
            </p>
            <h2>
                <span>下载App</span>
                <span>联系我们</span>
                <span>商务合作</span>
                <span>成为作者</span>
                <span>关于我们</span>
                <span>用户协议</span>
                <span>常见问题</span>
            </h2>
            <h3>
                <p>© 2013-2020 少数派</p>
                <p>粤ICP备09128966号-4 | CC BY-NC 4.0</p>
            </h3>
        </div>
    )
}

export default Footer