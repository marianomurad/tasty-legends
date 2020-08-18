import React from 'react';

const Product = ({name, price, url, image}) => {
    return (
            <Product
                name={name}
                price={price}
                image={image.fields.file.url}
                url={url}
            />
    );
};

export default Product;
