import Loading from '../components/Loading'
import React from 'react'
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

                        <div className='title-wrap'>
                            <span>Park Ubin</span>
                        </div>
                        <div className='about-wrap'>
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
                        </div>
                    </div>
                </> : ''}
        </div>
    );
};

export default Home