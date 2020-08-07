import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css'


const Navigation = () => {
    return (
        <div className='ma4'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 75 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3">
                    <img src={brain} alt='brain icon' />
                </div>
            </Tilt>
        </div>
    );
};

export default Navigation;