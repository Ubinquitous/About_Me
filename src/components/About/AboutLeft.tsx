import React from 'react';
import '@/style/About.scss';

const AboutLeft = () => {
    return (
        <div className='about-wrap'>
            <span className='about-title main'
                data-aos='fade-right'
                data-aos-offset='100'
                data-aos-duration='1300'
            >TEXT<br />TEXT TEXT</span>
            <span className='description main'
                data-aos='fade-right'
                data-aos-offset='120'
                data-aos-duration='1300'
            >Text text text text text text text text.<br />
                text text text text text text text text text, text<br />
                text text text text text text text text text text<br />
                text text text text text text text text, text<br />
                text text text text text text text text.</span>
        </div>
    );
};

export default AboutLeft;