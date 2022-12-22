import Loading from '../components/Loading'
import React, { useEffect } from 'react'
import '@/style/Home.scss'
import ThreeJS from '../components/ThreeJS';
import Header from '../components/Header';

const Home = () => {

    const [isLoad, setIsLoad] = React.useState(false);
    setTimeout(() => {
        setIsLoad(true);
    }, 2800);

    return (
        <div className='wrap'>
            <Loading />
            {isLoad ?
                <>
                    <Header />
                    <div className='home-wrap'>
                        <div className='title-wrap'> {/* 1 */}
                            <span>Park Ubin</span>
                        </div>
                        <div className='about-wrap'> {/* 2 */}
                            <span className='sub-text'></span>
                            <div className='main-about-text'>
                                <span className='title-a gallery-font'>
                                    FRONTEND
                                </span>
                                <span className='title-b'>
                                    DEVELOPER
                                </span>
                                <span className='title-c gallery-font'>
                                    KEEP LEARN
                                </span>
                                <span className='title-d'>
                                    텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 <br />
                                    텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트
                                </span>
                            </div>
                            <div className='snake-wrap'>
                                <div className="snake__snake-container s1">
                                    <svg className="snake__snake" viewBox="0 0 46 80">
                                        <path className="snake__railway" id="mypath" fill="none" d="M39 69c-2-1-9-2-16-1-12 2-20-1-18-8 2-8 14-5 19-3 6 2 16 4 18-2 2-4-1-7-3-8s-9-2-14-1c-5 2-7 3-11 3-4 1-11-1-12-6 0-6 5-8 12-8 12 2 27 6 27-4 0-11-11-8-25-4-7 1-15-1-15-8 0-6 5-7 10-6 8 1 9 3 13 4 9 1 16-3 16-9 0-7-8-8-15-7L13 2 4 1"></path>
                                        <text className="snake__text" width="100%">
                                            <textPath className="snake__text-path" dominantBaseline="central" xlinkHref="#mypath" fill="black" startOffset="0%">
                                                TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT
                                                TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT
                                            </textPath>
                                        </text>
                                    </svg>
                                </div>
                                <div className="snake__snake-container s2">
                                    <svg className="snake__snake" viewBox="0 0 46 80">
                                        <text className="snake__text" width="100%">
                                            <textPath className="snake__text-path" dominantBaseline="central" xlinkHref="#mypath" fill="black" startOffset="0%">
                                                TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT
                                                TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT
                                            </textPath>
                                        </text>
                                    </svg>
                                </div>
                                <div className="snake__snake-container s3">
                                    <svg className="snake__snake" viewBox="0 0 46 80">
                                        <text className="snake__text" width="100%">
                                            <textPath className="snake__text-path" dominantBaseline="central" xlinkHref="#mypath" fill="black" startOffset="0%">
                                                TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT
                                                TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT
                                            </textPath>
                                        </text>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className='title-wrap'>
                        </div>
                    </div>
                </> : ''}
        </div>
    );
};

export default Home