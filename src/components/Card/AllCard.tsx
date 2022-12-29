import React from 'react';
import { changeImg } from '../../function/changeImg';
import { mouseUnHover } from '../../function/mouseUnHover';
import '@/style/Card.scss';

const AllCard = () => {
    const [isPrevent, setIsPrevent] = React.useState(false);

    return (
        <>
            {isPrevent ?
                <div className='prevent-default-click'
                    style={{
                        width: '100vw',
                        height: '100vh',
                        position: 'absolute',
                        zIndex: 1
                    }} /> : null}
            <div className='cards'>
                <div className='card'>
                    <img
                        className='s s1 c1'
                        onMouseOver={(e) => { changeImg(e, '1', '/card/me/justhis-hover.png') }}
                        onMouseOut={(e) => { mouseUnHover(e, '1', '/card/me/justhis.png') }}
                        src='/card/me/justhis.png' alt='' />
                </div>
                <div className='card'>
                    <img
                        className='s s2 c2'
                        onMouseOver={(e) => { changeImg(e, '2', '/card/ex/bssm-algorithm.png') }}
                        onMouseOut={(e) => { mouseUnHover(e, '2', '/card/ex/bssm-algorithm.png') }}
                        src='/card/ex/bssm-algorithm.png' alt='' />
                </div>
                <div className='card'>
                    <img
                        className='s s3 c3'
                        onMouseOver={(e) => { changeImg(e, '3', '/card/me/note.png') }}
                        onMouseOut={(e) => { mouseUnHover(e, '3', '/card/me/note.png') }}
                        src='/card/me/note.png' alt='' />
                </div>
                <div className='card'>
                    <img
                        className='s s4 c4'
                        onMouseOver={(e) => { changeImg(e, '4', '/card/ex/v-log.png') }}
                        onMouseOut={(e) => { mouseUnHover(e, '4', '/card/ex/v-log.png') }}
                        src='/card/ex/v-log.png' alt='' />
                </div>
            </div>
            <div className='cards'>
                <div className='card'>
                    <img
                        className='s s5 c5'
                        onMouseOver={(e) => { changeImg(e, '5', '/card/ex/bexco-algorithm.png') }}
                        onMouseOut={(e) => { mouseUnHover(e, '5', '/card/ex/bexco-algorithm.png') }}
                        src='/card/ex/bexco-algorithm.png' alt='' />
                </div>
                <div className='card'>
                    <img
                        className='s s6 c6'
                        onMouseOver={(e) => { changeImg(e, '6', '/card/me/museum-hover.png') }}
                        onMouseOut={(e) => { mouseUnHover(e, '6', '/card/me/museum.png') }}
                        src='/card/me/museum.png' alt='' />
                </div>
                <div className='card'>
                    <img
                        className='s s7 c7'
                        onMouseOver={(e) => { changeImg(e, '7', '/card/ex/azure900.png') }}
                        onMouseOut={(e) => { mouseUnHover(e, '7', '/card/ex/azure900.png') }}
                        src='/card/ex/azure900.png' alt='' />
                </div>
                <div className='card'>
                    <img
                        className='s s8 c8'
                        onMouseOver={(e) => { changeImg(e, '8', '/card/me/sky-hover.png') }}
                        onMouseOut={(e) => { mouseUnHover(e, '8', '/card/me/sky.png') }}
                        src='/card/me/sky.png' alt='' />
                </div>
            </div>
        </>
    );
};

export default AllCard;