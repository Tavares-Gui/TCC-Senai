import React from 'react';
import CanvasGroup from './canvas';
import Overlay from './overlay';

const HomePage = () => {
    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
            <Overlay />
            <CanvasGroup />
        </div>
    );
};

export default HomePage;
