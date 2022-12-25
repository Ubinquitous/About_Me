import Loading from '../components/Loading'
import React, { useEffect, useRef } from 'react'
import '@/style/Home.scss'
import Aos from 'aos';
import "aos/dist/aos.css";
import renderSubBalls from '../function/renderSubBalls';
import renderMainBalls from '../function/renderMainBalls';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const mainboxRef = useRef(null);
    const maincanvasRef = useRef(null);
    const subboxRef = useRef(null);
    const subcanvasRef = useRef(null);
    const navigate = useNavigate();

    const [scrollY, setScrollY] = React.useState(0);
    const [isLoad, setIsLoad] = React.useState(false);
    const [isUsedRenderBallFuncion, setIsUsedRenderBallFuncion] = React.useState(false);

    setTimeout(() => {
        setIsLoad(true);
    }, 2800);

    const handleScroll = () => {
        const scrollPosition = window.pageYOffset;
        setScrollY(scrollPosition)
    };

    const changeImg = (e: any, src: string) => {
        setTimeout(() => {
            e.target.src = src;
        }, 50)
    }

    const onClickMoveCardPage = (router: string) => {
        navigate(`/card/${router}`)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    if (scrollY >= 1410 && !isUsedRenderBallFuncion) {
        renderSubBalls(subboxRef, subcanvasRef);
        renderMainBalls(mainboxRef, maincanvasRef);
        setIsUsedRenderBallFuncion(true)
    }

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className='wrap'>
            <Loading />
            {isLoad ?
                <>
                    <Header />
                    <div className='home-wrap'>
                        <div className='title-wrap item'> {/* 1 */}
                            <span className='title'>Park Ubin</span>
                            <span className='sub-title'>다양한 여러가지의 기술들을 깊이있게 알아가는 것을 좋아합니다.</span>
                        </div>
                        <div className='about-wrap item'>
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
                        <div className='about-wrap item'>
                            <div className='about-span-box'>
                                <span className='about-title sub'
                                    data-aos='fade-left'
                                    data-aos-offset='100'
                                    data-aos-duration='1300'
                                >TEXT<br />TEXT TEXT</span>
                                <span className='description sub'
                                    data-aos='fade-left'
                                    data-aos-offset='120'
                                    data-aos-duration='1300'
                                >Text text text text text text text text.<br />
                                    text text text text text text text text text, text<br />
                                    text text text text text text text text.</span>
                            </div>
                        </div>
                        <div className='circle-wrap item'>
                            <span className='circle-title'>TECH SKILL</span>
                            <div className='circle'>
                                <div className='sub-circle' ref={subboxRef}>
                                    <canvas ref={subcanvasRef} className='sub-canvas' />
                                </div>
                                <div className='main-circle' ref={mainboxRef}>
                                    <canvas ref={maincanvasRef} className='main-canvas' />
                                </div>
                            </div>
                            <span className='circle-subtitle'>SUB<br />TECHS</span>
                        </div>
                        <div className='card-wrap item'>
                            <div className='cards'>
                                <div className='card'>
                                    <img
                                        onClick={() => { onClickMoveCardPage('red') }}
                                        onMouseOver={(e) => { changeImg(e, '/techball/react.png') }}
                                        onMouseOut={(e) => { changeImg(e, '/techball/react.png') }}
                                        src='/techball/react.png' alt='' />
                                </div>
                                <div className='card'>
                                    <img src='/techball/mysql.png' alt='' />
                                </div>
                                <div className='card'>
                                    <img src='/techball/mysql.png' alt='' />
                                </div>
                                <div className='card'>
                                    <img src='/techball/mysql.png' alt='' />
                                </div>
                            </div>
                            <div className='cards'>
                                <div className='card'>
                                    <img src='/techball/mysql.png' alt='' />
                                </div>
                                <div className='card'>
                                    <img src='/techball/mysql.png' alt='' />
                                </div>
                                <div className='card'>
                                    <img src='/techball/mysql.png' alt='' />
                                </div>
                                <div className='card'>
                                    <img src='/techball/mysql.png' alt='' />
                                </div>
                            </div>
                        </div>
                        {/*<div className='contect-wrap'></div> */}
                    </div>
                </> : ''}
        </div>
    );
};

export default Home
