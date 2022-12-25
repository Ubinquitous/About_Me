import React from 'react';
import '../style/ContactMe.scss';

const ContactMe = () => {

    return (
        <div className='contact-wrap'>
            <div className='contact-description-wrap'>
                <div className='contact-title'>Contact Me</div>
                <div className='contact instagram'>
                    <a href='https://instagram.com/ubin._ing'
                        target='_blank'
                        rel='noreferrer'
                    >@ubin._ing</a>
                </div>
                <div className='contact github'>
                    <a href='https://github.com/ubinquitous'
                        target='_blank'
                        rel='noreferrer'
                    >github.com/ubinquitous</a>
                </div>
                <div className='contact gmail'>
                    <a href='mailto:ubinquitous1@gmail.com'>
                        ubinquitous1@gmail.com
                    </a>
                </div>
                <div className='contact-description'>언제든지 편하게 연락주세요.</div>
            </div>
        </div>
    );
};

export default ContactMe;