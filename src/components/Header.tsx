import React from 'react';
import '@/style/Header.scss';

const Header = () => {
    const reRender = () => {
        window.location.reload()
    }
    const MoveTo = (scroll: number) => {
        window.scrollTo({ top: scroll, behavior: "smooth" });
    };
    return (
        <div className='header-wrap'>
            <span className='header-title' onClick={reRender}>Park Ubin</span>
            <div className='navigation-wrap'>
                <span className='navigation-title' onClick={() => { MoveTo(704) }}>I Find</span>
                <span className='navigation-title' onClick={() => { MoveTo(1408) }}>My vision</span>
                <span className='navigation-title' onClick={() => { MoveTo(2112) }}>Tech</span>
                <span className='navigation-title' onClick={() => { MoveTo(2816) }}>About</span>
            </div>
        </div>
    );
};

export default Header;