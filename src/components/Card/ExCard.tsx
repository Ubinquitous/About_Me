import React from 'react';
import { useNavigate } from 'react-router-dom';
import { changeImg } from '../../function/changeImg';
import { mouseUnHover } from '../../function/mouseUnHover';
import '../../style/Card.scss';

const ExCard = () => {
    const navigate = useNavigate();

    const onClickMoveCardPage = (router: string) => {
        navigate(`/card/me/${router}`)
    }

    return (
        <>
            <div className='cards'>
                <div className='card'>
                    <img
                        className='s s1 c1'
                        onClick={() => { onClickMoveCardPage('justhis') }}
                        onMouseOver={(e) => { changeImg(e, '/card/ex/nypc.png') }}
                        onMouseOut={(e) => { mouseUnHover(e, '1', '/card/ex/nypc.png') }}
                        src='/card/ex/nypc.png' alt='' />
                </div>
                <div className='card'>
                    <img
                        className='s s2 c2'
                        onClick={() => { onClickMoveCardPage('monumnet-valley') }}
                        onMouseOver={(e) => { changeImg(e, '/card/ex/bssm-algorithm.png') }}
                        onMouseOut={(e) => { mouseUnHover(e, '2', '/card/ex/bssm-algorithm.png') }}
                        src='/card/ex/bssm-algorithm.png' alt='' />
                </div>
                <div className='card'>
                    <img
                        className='s s3 c3'
                        onClick={() => { onClickMoveCardPage('note') }}
                        onMouseOver={(e) => { changeImg(e, '/card/ex/festa.png') }}
                        onMouseOut={(e) => { mouseUnHover(e, '3', '/card/ex/festa.png') }}
                        src='/card/ex/festa.png' alt='' />
                </div>
                <div className='card'>
                    <img
                        className='s s4 c4'
                        onClick={() => { onClickMoveCardPage('mine') }}
                        onMouseOver={(e) => { changeImg(e, '/card/ex/v-log.png') }}
                        onMouseOut={(e) => { mouseUnHover(e, '4', '/card/ex/v-log.png') }}
                        src='/card/ex/v-log.png' alt='' />
                </div>
            </div>
            <div className='cards'>
                <div className='card'>
                    <img
                        className='s s5 c5'
                        onClick={() => { onClickMoveCardPage('plus-ex') }}
                        onMouseOver={(e) => { changeImg(e, '/card/ex/bexco-algorithm.png') }}
                        onMouseOut={(e) => { mouseUnHover(e, '5', '/card/ex/bexco-algorithm.png') }}
                        src='/card/ex/bexco-algorithm.png' alt='' />
                </div>
                <div className='card'>
                    <img
                        className='s s6 c6'
                        onClick={() => { onClickMoveCardPage('museum') }}
                        onMouseOver={(e) => { changeImg(e, '/card/ex/azure900.png') }}
                        onMouseOut={(e) => { mouseUnHover(e, '6', '/card/ex/azure900.png') }}
                        src='/card/ex/azure900.png' alt='' />
                </div>
                <div className='card'>
                    <img
                        className='s s7 c7'
                        onClick={() => { onClickMoveCardPage('bsmboo') }}
                        onMouseOver={(e) => { changeImg(e, '/card/ex/sad.png') }}
                        onMouseOut={(e) => { mouseUnHover(e, '7', '/card/ex/sad.png') }}
                        src='/card/ex/sad.png' alt='' />
                </div>
                <div className='card'>
                    <img
                        className='s s8 c8'
                        onClick={() => { onClickMoveCardPage('sky') }}
                        onMouseOver={(e) => { changeImg(e, '/card/ex/sad.png') }}
                        onMouseOut={(e) => { mouseUnHover(e, '8', '/card/ex/sad.png') }}
                        src='/card/ex/sad.png' alt='' />
                </div>
            </div>
        </>
    );
};

export default ExCard;