import Loading from '../components/Loading'
import React from 'react'
import '@/style/Home.scss'
import Aos from 'aos';
import "aos/dist/aos.css";
import renderSubBalls from '../function/renderSubBalls';
import renderMainBalls from '../function/renderMainBalls';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const mainboxRef = React.useRef(null);
    const maincanvasRef = React.useRef(null);
    const subboxRef = React.useRef(null);
    const subcanvasRef = React.useRef(null);
    const navigate = useNavigate();

    const [isClickALL, setIsClickALL] = React.useState(true);
    const [isClickME, setIsClickME] = React.useState(false);
    const [isClickEX, setIsClickEX] = React.useState(false);
    const [isPrevent, setIsPrevent] = React.useState(false);

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
        const card = document.querySelectorAll('.s') as any
        for (let i = 0; i < 8; i++) {
            card[i].classList.remove(`s${i + 1}`);
        }
        e.target.src = src;
    }

    const onClickMoveCardPage = (router: string) => {
        navigate(`/card/me/${router}`)
    }

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

    const MouseUnHover = (e: any, num: string, src: string) => {
        changeImg(e, src)
        const card = document.querySelector(`.c${num}`) as any
        card.classList.add('ff');
        setTimeout(() => {
            card.classList.remove('ff');
        }, 300)
    }

    if (scrollY >= 1410 && !isUsedRenderBallFuncion) {
        renderSubBalls(subboxRef, subcanvasRef);
        renderMainBalls(mainboxRef, maincanvasRef);
        setIsUsedRenderBallFuncion(true)
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
                            <span className='card-text all'
                                onClick={onClickALL}
                                style={isClickALL ? { color: 'white' } : { color: 'transparent' }}>ALL</span>
                            <span className='card-text me'
                                onClick={onClickME}
                                style={isClickME ? { color: 'white' } : { color: 'transparent' }}>ME</span>
                            <span className='card-text ex'
                                onClick={onClickEX}
                                style={isClickEX ? { color: 'white' } : { color: 'transparent' }}>EX</span>
                            <div className='card-box'>
                                {isPrevent ?
                                    <div className='prevent-default-click'
                                        style={{
                                            width: '100vw',
                                            height: '100vh',
                                            position: 'absolute',
                                            zIndex: 1
                                        }} /> : null}
                                {isClickALL ?
                                    <>
                                        <div className='cards'>
                                            <div className='card'>
                                                <img
                                                    className='s s1 c1'
                                                    onClick={() => { onClickMoveCardPage('justhis') }}
                                                    onMouseOver={(e) => { changeImg(e, '/card/me/justhis-hover.png') }}
                                                    onMouseOut={(e) => { MouseUnHover(e, '1', '/card/me/justhis.png') }}
                                                    src='/card/me/justhis.png' alt='' />
                                            </div>
                                            <div className='card'>
                                                <img
                                                    className='s s2 c2'
                                                    onClick={() => { onClickMoveCardPage('monumnet-valley') }}
                                                    onMouseOver={(e) => { changeImg(e, '/card/me/monument-valley-hover.png') }}
                                                    onMouseOut={(e) => { MouseUnHover(e, '2', '/card/me/monument-valley.png') }}
                                                    src='/card/me/monument-valley.png' alt='' />
                                            </div>
                                            <div className='card'>
                                                <img
                                                    className='s s3 c3'
                                                    onClick={() => { onClickMoveCardPage('note') }}
                                                    onMouseOver={(e) => { changeImg(e, '/card/me/note.png') }}
                                                    onMouseOut={(e) => { MouseUnHover(e, '3', '/card/me/note.png') }}
                                                    src='/card/me/note.png' alt='' />
                                            </div>
                                            <div className='card'>
                                                <img
                                                    className='s s4 c4'
                                                    onClick={() => { onClickMoveCardPage('mine') }}
                                                    onMouseOver={(e) => { changeImg(e, '/card/me/mine-hover.png') }}
                                                    onMouseOut={(e) => { MouseUnHover(e, '4', '/card/me/mine.png') }}
                                                    src='/card/me/mine.png' alt='' />
                                            </div>
                                        </div>
                                        <div className='cards'>
                                            <div className='card'>
                                                <img
                                                    className='s s5 c5'
                                                    onClick={() => { onClickMoveCardPage('plus-ex') }}
                                                    onMouseOver={(e) => { changeImg(e, '/card/me/plus-ex.png') }}
                                                    onMouseOut={(e) => { MouseUnHover(e, '5', '/card/me/plus-ex.png') }}
                                                    src='/card/me/plus-ex.png' alt='' />
                                            </div>
                                            <div className='card'>
                                                <img
                                                    className='s s6 c6'
                                                    onClick={() => { onClickMoveCardPage('museum') }}
                                                    onMouseOver={(e) => { changeImg(e, '/card/me/museum-hover.png') }}
                                                    onMouseOut={(e) => { MouseUnHover(e, '6', '/card/me/museum.png') }}
                                                    src='/card/me/museum.png' alt='' />
                                            </div>
                                            <div className='card'>
                                                <img
                                                    className='s s7 c1'
                                                    onClick={() => { onClickMoveCardPage('bsmboo') }}
                                                    onMouseOver={(e) => { changeImg(e, '/card/me/bsmboo.png') }}
                                                    onMouseOut={(e) => { MouseUnHover(e, '7', '/card/me/bsmboo.png') }}
                                                    src='/card/me/bsmboo.png' alt='' />
                                            </div>
                                            <div className='card'>
                                                <img
                                                    className='s s8 c1'
                                                    onClick={() => { onClickMoveCardPage('sky') }}
                                                    onMouseOver={(e) => { changeImg(e, '/card/me/sky-hover.png') }}
                                                    onMouseOut={(e) => { MouseUnHover(e, '8', '/card/me/sky.png') }}
                                                    src='/card/me/sky.png' alt='' />
                                            </div>
                                        </div>
                                    </>
                                    :
                                    isClickME ?
                                        <>
                                            <div className='cards'>
                                                <div className='card'>
                                                    <img
                                                        className='s s1 c1'
                                                        onClick={() => { onClickMoveCardPage('justhis') }}
                                                        onMouseOver={(e) => { changeImg(e, '/card/me/justhis-hover.png') }}
                                                        onMouseOut={(e) => { MouseUnHover(e, '1', '/card/me/justhis.png') }}
                                                        src='/card/me/justhis.png' alt='' />
                                                </div>
                                                <div className='card'>
                                                    <img
                                                        className='s s2 c2'
                                                        onClick={() => { onClickMoveCardPage('monumnet-valley') }}
                                                        onMouseOver={(e) => { changeImg(e, '/card/me/monument-valley-hover.png') }}
                                                        onMouseOut={(e) => { MouseUnHover(e, '2', '/card/me/monument-valley.png') }}
                                                        src='/card/me/monument-valley.png' alt='' />
                                                </div>
                                                <div className='card'>
                                                    <img
                                                        className='s s3 c3'
                                                        onClick={() => { onClickMoveCardPage('note') }}
                                                        onMouseOver={(e) => { changeImg(e, '/card/me/note.png') }}
                                                        onMouseOut={(e) => { MouseUnHover(e, '3', '/card/me/note.png') }}
                                                        src='/card/me/note.png' alt='' />
                                                </div>
                                                <div className='card'>
                                                    <img
                                                        className='s s4 c4'
                                                        onClick={() => { onClickMoveCardPage('mine') }}
                                                        onMouseOver={(e) => { changeImg(e, '/card/me/mine-hover.png') }}
                                                        onMouseOut={(e) => { MouseUnHover(e, '4', '/card/me/mine.png') }}
                                                        src='/card/me/mine.png' alt='' />
                                                </div>
                                            </div>
                                            <div className='cards'>
                                                <div className='card'>
                                                    <img
                                                        className='s s5 c5'
                                                        onClick={() => { onClickMoveCardPage('plus-ex') }}
                                                        onMouseOver={(e) => { changeImg(e, '/card/me/plus-ex.png') }}
                                                        onMouseOut={(e) => { MouseUnHover(e, '5', '/card/me/plus-ex.png') }}
                                                        src='/card/me/plus-ex.png' alt='' />
                                                </div>
                                                <div className='card'>
                                                    <img
                                                        className='s s6 c6'
                                                        onClick={() => { onClickMoveCardPage('museum') }}
                                                        onMouseOver={(e) => { changeImg(e, '/card/me/museum-hover.png') }}
                                                        onMouseOut={(e) => { MouseUnHover(e, '6', '/card/me/museum.png') }}
                                                        src='/card/me/museum.png' alt='' />
                                                </div>
                                                <div className='card'>
                                                    <img
                                                        className='s s7 c7'
                                                        onClick={() => { onClickMoveCardPage('bsmboo') }}
                                                        onMouseOver={(e) => { changeImg(e, '/card/me/bsmboo.png') }}
                                                        onMouseOut={(e) => { MouseUnHover(e, '7', '/card/me/bsmboo.png') }}
                                                        src='/card/me/bsmboo.png' alt='' />
                                                </div>
                                                <div className='card'>
                                                    <img
                                                        className='s s8 c8'
                                                        onClick={() => { onClickMoveCardPage('sky') }}
                                                        onMouseOver={(e) => { changeImg(e, '/card/me/sky-hover.png') }}
                                                        onMouseOut={(e) => { MouseUnHover(e, '8', '/card/me/sky.png') }}
                                                        src='/card/me/sky.png' alt='' />
                                                </div>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div className='cards'>
                                                <div className='card'>
                                                    <img
                                                        className='s s1 c1'
                                                        onClick={() => { onClickMoveCardPage('justhis') }}
                                                        onMouseOver={(e) => { changeImg(e, '/card/ex/nypc.png') }}
                                                        onMouseOut={(e) => { MouseUnHover(e, '1', '/card/ex/nypc.png') }}
                                                        src='/card/ex/nypc.png' alt='' />
                                                </div>
                                                <div className='card'>
                                                    <img
                                                        className='s s2 c2'
                                                        onClick={() => { onClickMoveCardPage('monumnet-valley') }}
                                                        onMouseOver={(e) => { changeImg(e, '/card/ex/bssm-algorithm.png') }}
                                                        onMouseOut={(e) => { MouseUnHover(e, '2', '/card/ex/bssm-algorithm.png') }}
                                                        src='/card/ex/bssm-algorithm.png' alt='' />
                                                </div>
                                                <div className='card'>
                                                    <img
                                                        className='s s3 c3'
                                                        onClick={() => { onClickMoveCardPage('note') }}
                                                        onMouseOver={(e) => { changeImg(e, '/card/ex/festa.png') }}
                                                        onMouseOut={(e) => { MouseUnHover(e, '3', '/card/ex/festa.png') }}
                                                        src='/card/ex/festa.png' alt='' />
                                                </div>
                                                <div className='card'>
                                                    <img
                                                        className='s s4 c4'
                                                        onClick={() => { onClickMoveCardPage('mine') }}
                                                        onMouseOver={(e) => { changeImg(e, '/card/ex/v-log.png') }}
                                                        onMouseOut={(e) => { MouseUnHover(e, '4', '/card/ex/v-log.png') }}
                                                        src='/card/ex/v-log.png' alt='' />
                                                </div>
                                            </div>
                                            <div className='cards'>
                                                <div className='card'>
                                                    <img
                                                        className='s s5 c5'
                                                        onClick={() => { onClickMoveCardPage('plus-ex') }}
                                                        onMouseOver={(e) => { changeImg(e, '/card/ex/bexco-algorithm.png') }}
                                                        onMouseOut={(e) => { MouseUnHover(e, '5', '/card/ex/bexco-algorithm.png') }}
                                                        src='/card/ex/bexco-algorithm.png' alt='' />
                                                </div>
                                                <div className='card'>
                                                    <img
                                                        className='s s6 c6'
                                                        onClick={() => { onClickMoveCardPage('museum') }}
                                                        onMouseOver={(e) => { changeImg(e, '/card/ex/azure900.png') }}
                                                        onMouseOut={(e) => { MouseUnHover(e, '6', '/card/ex/azure900.png') }}
                                                        src='/card/ex/azure900.png' alt='' />
                                                </div>
                                                <div className='card'>
                                                    <img
                                                        className='s s7 c7'
                                                        onClick={() => { onClickMoveCardPage('bsmboo') }}
                                                        onMouseOver={(e) => { changeImg(e, '/card/ex/sad.png') }}
                                                        onMouseOut={(e) => { MouseUnHover(e, '7', '/card/ex/sad.png') }}
                                                        src='/card/ex/sad.png' alt='' />
                                                </div>
                                                <div className='card'>
                                                    <img
                                                        className='s s8 c8'
                                                        onClick={() => { onClickMoveCardPage('sky') }}
                                                        onMouseOver={(e) => { changeImg(e, '/card/ex/sad.png') }}
                                                        onMouseOut={(e) => { MouseUnHover(e, '8', '/card/ex/sad.png') }}
                                                        src='/card/ex/sad.png' alt='' />
                                                </div>
                                            </div>
                                        </>}
                            </div>
                        </div>
                        {/*<div className='contect-wrap'></div> */}
                    </div>
                </> : ''}
        </div>
    );
};

export default Home
