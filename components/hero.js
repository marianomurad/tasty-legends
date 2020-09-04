import React from 'react';

const HeroComponent = ({alt = 'hero', src = ''}) => {
    return (
        <div className='container-hero'>
            <div className='container-hero-text'> Tasty Legends</div>
            <img className='hero' alt={alt} src={src}/>
        <style jsx>{`
        .container-hero {
          background: #101010;
        }

        .container-hero-text {
          font-family: "Dancing Script";
          color: white;
          font-size: 100px;
          position: absolute;
          top: 30%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-5deg);          
        }
        .hero {
            display: flex;
            width: 100vw;
            height: 35vw;
            margin: 0;
            object-fit: cover;
        }    
        `}
        </style>
        </div>
    );
};

export default HeroComponent;
