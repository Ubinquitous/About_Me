import Loading from '../components/Loading'
import React from 'react'
import '@/style/Home.scss'
import '@/style/Circle.scss'
import Aos from 'aos';
import "aos/dist/aos.css";
import renderMainBalls from '../function/renderMainBalls';
import Header from '../components/Header';
import Title from '../components/Title';
import AboutLeft from '../components/About/AboutLeft';
import AboutRight from '../components/About/AboutRight';
import AllCard from '../components/Card/AllCard';
import MeCard from '../components/Card/MeCard';
import ExCard from '../components/Card/ExCard';
import renderSubBalls from '../function/renderSubBalls';
import ContactMe from '../components/ContactMe';

const Home = () => {
    const mainboxRef = React.useRef(null);
    const maincanvasRef = React.useRef(null);
    const subboxRef = React.useRef(null);
    const subcanvasRef = React.useRef(null);

    const [isClickALL, setIsClickALL] = React.useState(true);
    const [isClickME, setIsClickME] = React.useState(false);
    const [isClickEX, setIsClickEX] = React.useState(false);
    const [isPrevent, setIsPrevent] = React.useState(false);

    const [scrollY, setScrollY] = React.useState(0);
    const [isLoad, setIsLoad] = React.useState(false);

    const [isUsedRenderBallFuncion, setIsUsedRenderBallFuncion] = React.useState(false);
    const [isMovedCardPage, setIsMovedCardPage] = React.useState(false);

    setTimeout(() => {
        setIsLoad(true);
    }, 2800);

    const handleScroll = () => {
        const scrollPosition = window.pageYOffset;
        setScrollY(scrollPosition)
    };

    const onClickALL = () => {
        if (!isClickALL) {
            setIsPrevent(true);
            const card = document.querySelectorAll('.s') as any
            for (let i = 0; i < 8; i++) {
                card[i].classList.add(`a${i + 1}`);
            }
            const AL = document.querySelector('.all') as any
            const ME = document.querySelector('.me') as any
            const EX = document.querySelector('.ex') as any
            AL.style.color = 'white'
            ME.style.color = 'transparent'
            EX.style.color = 'transparent'
            setTimeout(() => {
                setIsClickALL(true);
                setIsClickME(false);
                setIsClickEX(false);
                for (let i = 0; i < 8; i++) {
                    card[i].classList.remove(`a${i + 1}`);
                    card[i].classList.add(`s${i + 1}`);
                }
            }, 1500);
            setTimeout(() => {
                setIsPrevent(false);
            }, 3300);
        }
    }

    const onClickME = () => {
        if (!isClickME) {
            setIsPrevent(true);
            const card = document.querySelectorAll('.s') as any
            for (let i = 0; i < 8; i++) {
                card[i].classList.add(`a${i + 1}`);
            }
            const AL = document.querySelector('.all') as any
            const ME = document.querySelector('.me') as any
            const EX = document.querySelector('.ex') as any
            AL.style.color = 'transparent'
            ME.style.color = 'white'
            EX.style.color = 'transparent'
            setTimeout(() => {
                setIsClickALL(false);
                setIsClickME(true);
                setIsClickEX(false);
                for (let i = 0; i < 8; i++) {
                    card[i].classList.remove(`a${i + 1}`);
                    card[i].classList.add(`s${i + 1}`);
                }
            }, 1500);
            setTimeout(() => {
                setIsPrevent(false);
            }, 3300);
        }
    }

    const onClickEX = () => {
        if (!isClickEX) {
            setIsPrevent(true);
            const card = document.querySelectorAll('.s') as any
            for (let i = 0; i < 8; i++) {
                card[i].classList.add(`a${i + 1}`);
            }
            const AL = document.querySelector('.all') as any
            const ME = document.querySelector('.me') as any
            const EX = document.querySelector('.ex') as any
            AL.style.color = 'transparent'
            ME.style.color = 'transparent'
            EX.style.color = 'white'
            setTimeout(() => {
                setIsClickALL(false);
                setIsClickME(false);
                setIsClickEX(true);
                for (let i = 0; i < 8; i++) {
                    card[i].classList.remove(`a${i + 1}`);
                    card[i].classList.add(`s${i + 1}`);
                }
            }, 1500);
            setTimeout(() => {
                setIsPrevent(false);
            }, 3300);
        }
    }

    if (scrollY >= 1410 && !isUsedRenderBallFuncion) {
        renderSubBalls(subboxRef, subcanvasRef);
        renderMainBalls(mainboxRef, maincanvasRef);
        setIsUsedRenderBallFuncion(true)
    }

    if (scrollY >= 2610 && !isMovedCardPage) {
        setIsMovedCardPage(true);
    }

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    React.useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className='wrap'>
            <Loading />
            {isLoad ?
                <>
                    <Header />
                    <div className='home-wrap'>
                        <Title />
                        <AboutLeft />
                        <AboutRight />
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
                            <span className='card-text all'
                                onClick={onClickALL}
                                style={isClickALL ? { color: 'white' } : { color: 'transparent' }}>ALL</span>
                            <span className='card-text me'
                                onClick={onClickME}
                                style={isClickME ? { color: 'white' } : { color: 'transparent' }}>ME</span>
                            <span className='card-text ex'
                                onClick={onClickEX}
                                style={isClickEX ? { color: 'white' } : { color: 'transparent' }}>EX</span>
                            {isMovedCardPage ?
                                <div className='card-box'>
                                    {isPrevent ?
                                        <div className='prevent-default-click'
                                            style={{
                                                width: '100vw',
                                                height: '100vh',
                                                position: 'absolute',
                                                zIndex: 1
                                            }} /> : null}
                                    {isClickALL ? <AllCard /> : isClickME ? <MeCard /> : <ExCard />}
                                </div> : ''}
                        </div>
                        <ContactMe />
                    </div>
                </> : ''}
        </div>
    );
};

export default Home
