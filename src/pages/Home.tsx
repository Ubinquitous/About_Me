import Loading from '../components/Loading'
import React from 'react'
import '@/style/Home.scss'

const Home = () => {
    return (
        <div>
            <Loading />
            <div className='home-wrap'>
                <h1>test</h1>
            </div>
        </div>
    );
};

export default Home