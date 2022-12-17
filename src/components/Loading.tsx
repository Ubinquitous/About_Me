import React from 'react'
import '@/style/Loading.scss'

const Loading = () => {
    const msgArray = ['@ubin._ing', 'github.com/Ubinquitous', 'ubinquitous1@gmail.com']
    const randomMsg = msgArray[Math.trunc(Math.random() * 3)]

    return (
        <div className='loading-wrap'>
            <svg className='svg-wrap' width="63" height="50" viewBox="0 0 63 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect className="gray-right-top" width="6.219" height="31.095" transform="matrix(-0.707107 0.707107 0.707107 0.707107 40.3652 5.83759)" fill="#989898" />
                <rect className="black-right-top" width="6.219" height="22.3884" transform="matrix(-0.707107 0.707107 0.707107 0.707107 34.4486 11.9403)" fill="black" />
                <rect className="black-right-bottom" width="6.219" height="31.095" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 50.2796 27.7809)" fill="black" />
                <rect className="gray-right-bottom" width="6.219" height="31.095" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 62.3444 27.7809)" fill="#989898" />
                <rect className="black-left-bottom" width="6.219" height="31.095" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 22.0255 44.1542)" fill="black" />
                <rect className="black-left-top" width="6.219" height="25.0277" transform="matrix(0.707107 0.707107 0.707107 -0.707107 3.85339 18.3372)" fill="black" />
                <rect className="gray-left-top" width="6.219" height="31.095" transform="matrix(0.707107 0.707107 0.707107 -0.707107 12.3273 21.9875)" fill="#989898" />
                <rect className="gray-left-bottom" width="6.219" height="22.3884" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 28.2202 37.8904)" fill="#989898" />
            </svg>
            <span className='title-text'>{randomMsg}</span>
            <div className='move-page' />
        </div>
    )
}

export default Loading