import React from 'react';
import Product from "./product";
import { Carousel } from 'rsuite';

const CarouselComponent = ({products}) => {

    return (
        <Carousel key="bottom bar" placement="bottom" shape="bar" className="custom-slider" style={{maxWidth: 500}}>

            {products.length > 0
                ? products.map((p, i) => (
                    <>
                    <Product
                        key={i}
                        name={p.fields.name}
                        price={p.fields.price}
                        image={p.fields.image.fields.file.url}
                        url={p.fields.url}
                    />
                    </>
                ))
                : null}
        </Carousel>
    );
};

export default CarouselComponent;
