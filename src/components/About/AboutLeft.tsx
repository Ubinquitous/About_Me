import React from 'react';
import '@/style/About.scss';

const AboutLeft = () => {
    return (
        <div className='about-wrap'>
            <span className='about-title main'
                data-aos='fade-right'
                data-aos-offset='100'
                data-aos-duration='1300'
            >I am</span>
            <span className='description main'
                data-aos='fade-right'
                data-aos-offset='120'
                data-aos-duration='1300'
            >
                나 자신이 즐길 수 있는 개발에 열정을 다합니다.<br />
                더 많은 컴퓨터 공학 지식들을 공부하고 사용하려고 노력하며,<br />
                세세히 공부 계획을 짠 후 계획대로 공부하는 것을 즐거워합니다.
            </span>
        </div>
    );
};

export default AboutLeft;