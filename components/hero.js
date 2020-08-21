import React from 'react';

const HeroComponent = ({alt = 'hero', src = ''}) => {
    return (
        <>
            <img className='hero' alt={alt} src={src}/>
        <style jsx>{`
        .hero {
        display: flex;
            width: 100vw;
            height: 70vw;
            margin: 0;
        }    
        `}
        </style>
        </>
    );
};

export default HeroComponent;
