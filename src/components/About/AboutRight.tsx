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
                >My<br />Interest</span>
                <span className='description sub'
                    data-aos='fade-left'
                    data-aos-offset='120'
                    data-aos-duration='1300'
                >
                    컴퓨터의 기초를 다루는 컴퓨터과학을 좋아합니다.<br />
                    현재 사용중인 컴퓨터가 어떻게 동작하는지에 대해 흥미로워합니다.<br /><br />
                    컴퓨터과학을 토대로 기본기를 공부한 개발자가 후에 훌륭한 개발자가 되며,<br />
                    개발자에게 있어 컴퓨터과학은 없어서는 안되는 학문이라 생각합니다.
                </span>
            </div>
        </div>
    );
};

export default AboutRight;