import React from 'react';
import { useNavigate } from 'react-router-dom';
import { changeImg } from '../../function/changeImg';
import { mouseUnHover } from '../../function/mouseUnHover';
import '../../style/Card.scss';

const MeCard = () => {
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
                        onMouseOver={(e) => { changeImg(e, '/card/me/justhis-hover.png') }}
                        onMouseOut={(e) => { mouseUnHover(e, '1', '/card/me/justhis.png') }}
                        src='/card/me/justhis.png' alt='' />
                </div>
                <div className='card'>
                    <img
                        className='s s2 c2'
                        onClick={() => { onClickMoveCardPage('monumnet-valley') }}
                        onMouseOver={(e) => { changeImg(e, '/card/me/monument-valley-hover.png') }}
                        onMouseOut={(e) => { mouseUnHover(e, '2', '/card/me/monument-valley.png') }}
                        src='/card/me/monument-valley.png' alt='' />
                </div>
                <div className='card'>
                    <img
                        className='s s3 c3'
                        onClick={() => { onClickMoveCardPage('note') }}
                        onMouseOver={(e) => { changeImg(e, '/card/me/note.png') }}
                        onMouseOut={(e) => { mouseUnHover(e, '3', '/card/me/note.png') }}
                        src='/card/me/note.png' alt='' />
                </div>
                <div className='card'>
                    <img
                        className='s s4 c4'
                        onClick={() => { onClickMoveCardPage('mine') }}
                        onMouseOver={(e) => { changeImg(e, '/card/me/mine-hover.png') }}
                        onMouseOut={(e) => { mouseUnHover(e, '4', '/card/me/mine.png') }}
                        src='/card/me/mine.png' alt='' />
                </div>
            </div>
            <div className='cards'>
                <div className='card'>
                    <img
                        className='s s5 c5'
                        onClick={() => { onClickMoveCardPage('plus-ex') }}
                        onMouseOver={(e) => { changeImg(e, '/card/me/plus-ex.png') }}
                        onMouseOut={(e) => { mouseUnHover(e, '5', '/card/me/plus-ex.png') }}
                        src='/card/me/plus-ex.png' alt='' />
                </div>
                <div className='card'>
                    <img
                        className='s s6 c6'
                        onClick={() => { onClickMoveCardPage('museum') }}
                        onMouseOver={(e) => { changeImg(e, '/card/me/museum-hover.png') }}
                        onMouseOut={(e) => { mouseUnHover(e, '6', '/card/me/museum.png') }}
                        src='/card/me/museum.png' alt='' />
                </div>
                <div className='card'>
                    <img
                        className='s s7 c7'
                        onClick={() => { onClickMoveCardPage('bsmboo') }}
                        onMouseOver={(e) => { changeImg(e, '/card/me/bsmboo.png') }}
                        onMouseOut={(e) => { mouseUnHover(e, '7', '/card/me/bsmboo.png') }}
                        src='/card/me/bsmboo.png' alt='' />
                </div>
                <div className='card'>
                    <img
                        className='s s8 c8'
                        onClick={() => { onClickMoveCardPage('sky') }}
                        onMouseOver={(e) => { changeImg(e, '/card/me/sky-hover.png') }}
                        onMouseOut={(e) => { mouseUnHover(e, '8', '/card/me/sky.png') }}
                        src='/card/me/sky.png' alt='' />
                </div>
            </div>
        </>
    );
};

export default MeCard;