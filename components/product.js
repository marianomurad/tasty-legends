
function Product({ name, price, image, ingredients }) {
    console.log(ingredients.toString());
    return (
        <div className="container">
            <a>
                <img alt={name} src={image.toString()} height="400" width="380"/>
            </a>
            <div className="text">
                <h2>{name}</h2>
                <h4>{price} $</h4>
                <p style={{textWrap: 'wrap'}}>{ingredients}</p>
                <button> Comprar</button>

            </div>
            <style jsx>{`
        a {
          border-bottom: none;
        }
        a:hover {
          border-bottom: none;
        }
        .text {
          margin-top: -160px;
          padding: 24px;
          position: absolute;
        }
        h2 {
          color: white;
          font-size: 24px;
          margin-bottom: 0;
        }
        h4 {
          color: rgba(255, 255, 255, 0.8);
          font-size: 16px;
          font-weight: 500;
          margin-top: 8px;
        }
      `}</style>
        </div>
    )
}

export default Product
