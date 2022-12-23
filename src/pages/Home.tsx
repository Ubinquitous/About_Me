import Loading from '../components/Loading'
import React, { useEffect } from 'react'
import '@/style/Home.scss'
import ThreeJS from '../components/ThreeJS';
import Aos from 'aos';
import "aos/dist/aos.css";

const Home = () => {
    const [scrollY, setScrollY] = React.useState(0);
    const [isLoad, setIsLoad] = React.useState(false);
    setTimeout(() => {
        setIsLoad(true);
    }, 2800);

    const handleScroll = () => {
        const scrollPosition = window.pageYOffset;
        setScrollY(scrollPosition)
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className='wrap'>
            <Loading />
            {isLoad ?
                <>
                    <div className='home-wrap'>
                        <div className='title-wrap'> {/* 1 */}
                            <span>Park Ubin</span>
                        </div>
                    </div>
                </> : ''}
        </div>
    );
};

export default Home
