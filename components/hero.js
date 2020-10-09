import React from 'react';

const HeroComponent = ({alt = 'hero', src = ''}) => {
    return (
        <div className='c-hero'>
            <div className='c-hero__text'> Tasty Legends</div>
            <img className='c-hero__image' alt={alt} src={src}/>
        </div>
    );
};

export default HeroComponent;
