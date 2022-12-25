import React from 'react';
import '@/style/About.scss';
const AboutRight = () => {
    return (
        <div className='about-wrap item'>
            <div className='about-span-box'>
                <span className='about-title sub'
                    data-aos='fade-left'
                    data-aos-offset='100'
                    data-aos-duration='1300'
                >My<br />Vision is</span>
                <span className='description sub'
                    data-aos='fade-left'
                    data-aos-offset='120'
                    data-aos-duration='1300'
                >Text text text text text text text text.<br />
                    text text text text text text text text text, text<br />
                    text text text text text text text text.</span>
            </div>
        </div>
    );
};

export default AboutRight;