import React from 'react';
import About from '../components/About';
import Watermark from '../components/WaterMaker'

const Overlay = () => {
    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                backgroundImage: `url('./background/foikk.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div
                style={{
                    width: '50%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    zIndex: 10,
                }}
            >
                <About />
            </div>
            <div
                style={{
                    width: '50%',
                    height: '20%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    zIndex: 10,
                }}
            >
                <Watermark />
            </div>
        </div>
    );
};

export default Overlay;
